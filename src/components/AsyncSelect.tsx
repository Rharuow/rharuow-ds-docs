import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { cn } from "../lib/utils";
import type { SelectOption } from "./types";

export interface AsyncSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'options'> {
  name: string;
  label?: string;
  loadOptions: (inputValue?: string) => Promise<SelectOption[]>;
  containerClassName?: string;
  isClearable?: boolean;
  defaultOptions?: SelectOption[] | boolean;
  loadingMessage?: string;
  noOptionsMessage?: string;
  searchable?: boolean;
  debounceMs?: number;
}

const AsyncSelect = React.forwardRef<HTMLSelectElement, AsyncSelectProps>(
  (
    {
      name,
      label,
      loadOptions,
      className,
      containerClassName,
      isClearable,
      defaultOptions = false,
      loadingMessage = "Carregando...",
      noOptionsMessage = "Nenhuma opção encontrada",
      searchable = false,
      debounceMs = 300,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<SelectOption[]>([]);
    const [loading, setLoading] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const [searchTerm, setSearchTerm] = React.useState("");
    const [dropdownPosition, setDropdownPosition] = React.useState({
      top: 0,
      left: 0,
      width: 0,
    });
    const componentRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const form = useFormContext();
    const control = form?.control;
    const valueWatch =
      control && name ? useWatch({ control, name }) : undefined;
    const value = props.value ?? valueWatch ?? "";
    const error = form?.formState?.errors?.[name as string]?.message;

    // Floating label: label sobe se select está focado ou tem valor
    const isFloating = focused || !!value;

    // Utility to detect mobile devices
    const isMobileDevice = React.useCallback(() => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
             window.innerWidth <= 768;
    }, []);

    // Calculate dropdown position
    const updateDropdownPosition = React.useCallback(() => {
      if (componentRef.current && open) {
        const rect = componentRef.current.getBoundingClientRect();
        const isMobile = isMobileDevice();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const dropdownHeight = 152; // ~9.5rem
        
        let top = rect.bottom + 4;
        let left = rect.left;
        
        // Mobile-specific adjustments
        if (isMobile) {
          // Check available space below and above
          const spaceBelow = viewportHeight - rect.bottom;
          const spaceAbove = rect.top;
          
          // Show above if not enough space below
          if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
            top = rect.top - dropdownHeight - 4;
          }
          
          // Ensure dropdown doesn't go off screen horizontally
          const margin = 16;
          const maxLeft = viewportWidth - rect.width - margin;
          left = Math.min(Math.max(left, margin), maxLeft);
        } else {
          // Desktop: Check if dropdown would go below viewport
          const spaceBelow = viewportHeight - rect.bottom;
          if (spaceBelow < dropdownHeight) {
            top = rect.top - dropdownHeight - 4;
          }
        }
        
        setDropdownPosition({
          top,
          left,
          width: rect.width,
        });
      }
    }, [open, isMobileDevice]);

    // Update position when dropdown opens or window resizes
    React.useEffect(() => {
      updateDropdownPosition();
      
      if (open) {
        const handleResize = () => updateDropdownPosition();
        const handleScroll = () => updateDropdownPosition();
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, true);
        
        return () => {
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('scroll', handleScroll, true);
        };
      }
    }, [open, updateDropdownPosition]);

    // Debounce search term
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setSearchTerm(inputValue);
      }, debounceMs);

      return () => clearTimeout(timer);
    }, [inputValue, debounceMs]);

    // Load options when search term changes or component opens
    React.useEffect(() => {
      if (open || (defaultOptions && options.length === 0)) {
        loadOptionsAsync(searchable ? searchTerm : undefined);
      }
    }, [searchTerm, open]);

    // Load default options on mount if defaultOptions is true or an array
    React.useEffect(() => {
      if (defaultOptions === true) {
        loadOptionsAsync();
      } else if (Array.isArray(defaultOptions)) {
        setOptions(defaultOptions);
      }
    }, []);

    const loadOptionsAsync = async (search?: string) => {
      try {
        setLoading(true);
        const result = await loadOptions(search);
        setOptions(result);
      } catch (error) {
        console.error("Error loading options:", error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    };

    // Handle clicks outside component
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          componentRef.current &&
          !componentRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
          setFocused(false);
          setInputValue("");
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Dropdown open/close handlers
    const handleContainerClick = () => {
      if (!open) {
        setOpen(true);
        setFocused(true);
        if (searchable && inputRef.current) {
          setTimeout(() => inputRef.current?.focus(), 0);
        }
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
      setFocused(true);
      if (onFocus)
        onFocus(event as unknown as React.FocusEvent<HTMLSelectElement>);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
      if (onBlur)
        onBlur(event as unknown as React.FocusEvent<HTMLSelectElement>);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleOptionSelect = (selectedValue: string) => {
      if (form && name) form.setValue(name, selectedValue);
      if (props.onChange) {
        const event = {
          target: { value: selectedValue },
        } as React.ChangeEvent<HTMLSelectElement>;
        props.onChange(event);
      }
      setOpen(false);
      setFocused(false);
      setInputValue("");
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (form && name) form.setValue(name, "");
      if (props.onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLSelectElement>;
        props.onChange(event);
      }
      setOpen(false);
      setFocused(false);
      setInputValue("");
    };

    const selectedOption = options.find(opt => opt.value === value);
    const displayValue = searchable && open ? inputValue : (selectedOption?.label || "");

    return (
      <div className={cn("relative", containerClassName)} ref={componentRef}>
        <div
          id={props.id || name}
          tabIndex={searchable ? -1 : 0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            "peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",
            className
          )}
          onClick={handleContainerClick}
          onFocus={!searchable ? handleFocus : undefined}
          onBlur={!searchable ? handleBlur : undefined}
          ref={ref as unknown as React.RefObject<HTMLDivElement>}
        >
          {searchable ? (
            <input
              ref={inputRef}
              type="text"
              value={displayValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={!label ? "Selecione..." : ""}
              className={cn(
                "w-full bg-transparent border-none outline-none text-sm",
                !value && !inputValue && "text-gray-400"
              )}
            />
          ) : (
            <span className={cn("block truncate", !value && "text-gray-400")}>
              {selectedOption?.label || (!label && "Selecione...")}
            </span>
          )}
          
          {loading && (
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"></div>
            </div>
          )}
          
          {isClearable && value && !loading && (
            <button
              type="button"
              tabIndex={-1}
              aria-label="Limpar seleção"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none"
              onClick={handleClear}
            >
              &#10005;
            </button>
          )}
        </div>
        
        {label && (
          <label
            htmlFor={props.id || name}
            className={cn(
              "absolute left-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",
              isFloating
                ? "top-0 scale-90 -translate-y-1 text-xs text-[var(--primary,#2563eb)] p-1 rounded-full bg-white"
                : "top-3 scale-100 translate-y-0.5"
            )}
          >
            {label}
          </label>
        )}
        
        {/* Dropdown custom UI */}
        <div
          className={cn(
            "absolute left-0 w-full mt-1 rounded-md transition-all duration-200 overflow-hidden",
            "bg-[var(--select-dropdown-bg)] border-[var(--select-dropdown-border)] text-[var(--select-dropdown-text)]",
            open
              ? "border max-h-36 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          )}
          style={{
            maxHeight: open ? "9.5rem" : "0",
            overflowY: options.length > 3 ? "auto" : "hidden",
            position: "fixed", // Use fixed positioning to escape container overflow
            top: open ? `${dropdownPosition.top}px` : "auto",
            left: open ? `${dropdownPosition.left}px` : "auto",
            width: open ? `${dropdownPosition.width}px` : "auto",
            zIndex: 9999,
            boxShadow: open ? "var(--select-dropdown-shadow)" : "none",
          }}
        >
          {loading ? (
            <div className="px-3 py-2 text-sm text-gray-500 text-center">
              {loadingMessage}
            </div>
          ) : options.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-500 text-center">
              {noOptionsMessage}
            </div>
          ) : (
            options.map((opt) => (
              <div
                key={opt.value}
                className={cn(
                  "px-3 py-2 cursor-pointer text-sm transition-colors duration-150",
                  "hover:bg-[var(--select-dropdown-hover)]",
                  value === opt.value && "bg-[var(--select-dropdown-selected)]"
                )}
                onMouseDown={() => handleOptionSelect(opt.value)}
              >
                {opt.label}
              </div>
            ))
          )}
        </div>
        
        {error && (
          <span className="text-red-500 text-xs mt-1 block">
            {error as string}
          </span>
        )}
      </div>
    );
  }
);

AsyncSelect.displayName = "AsyncSelect";

export { AsyncSelect };
