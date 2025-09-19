import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { cn } from "../lib/utils";
import type { SelectOption } from "./types";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: SelectOption[];
  containerClassName?: string;
  isClearable?: boolean;
  searchable?: boolean;
  filterPlaceholder?: string;
  caseSensitive?: boolean;
  filterFunction?: (option: SelectOption, searchTerm: string) => boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      options,
      className,
      containerClassName,
      isClearable,
      searchable = false,
      filterPlaceholder = "Digite para filtrar...",
      caseSensitive = false,
      filterFunction,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
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

    // Filter logic
    const defaultFilterFunction = (option: SelectOption, searchTerm: string) => {
      const optionText = caseSensitive ? option.label : option.label.toLowerCase();
      const search = caseSensitive ? searchTerm : searchTerm.toLowerCase();
      return optionText.includes(search);
    };

    const applyFilter = filterFunction || defaultFilterFunction;
    const filteredOptions = inputValue.trim() 
      ? options.filter(option => applyFilter(option, inputValue.trim()))
      : options;

    // Display value logic
    const selectedOption = options.find(opt => opt.value === value);
    const displayValue = searchable && open ? inputValue : (selectedOption?.label || "");

    // Floating label: label sobe se select está focado ou tem valor
    const isFloating = focused || !!value || (searchable && !!inputValue);

    // Calculate dropdown position
    const updateDropdownPosition = React.useCallback(() => {
      if (componentRef.current && open) {
        const rect = componentRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX,
          width: rect.width,
        });
      }
    }, [open]);

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

    // Handle clicks outside component
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          componentRef.current &&
          !componentRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
          setFocused(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // Dropdown open/close handlers
    const handleContainerClick = () => {
      setOpen((prev) => !prev);
      setFocused(true);
    };

    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
      setFocused(true);
      if (onFocus)
        onFocus(event as unknown as React.FocusEvent<HTMLSelectElement>);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
      // Não fechar imediatamente no blur, deixar o click outside handle isso
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

    return (
      <div className={cn("relative", containerClassName)} ref={componentRef}>
        <div
          id={props.id || name}
          tabIndex={0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            "peer flex items-center h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-3 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",
            className
          )}
          onClick={!searchable ? handleContainerClick : undefined}
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
              onFocus={!searchable ? undefined : (e) => {
                setFocused(true);
                setOpen(true);
                if (onFocus) onFocus(e as unknown as React.FocusEvent<HTMLSelectElement>);
              }}
              onBlur={!searchable ? undefined : (e) => {
                if (onBlur) onBlur(e as unknown as React.FocusEvent<HTMLSelectElement>);
              }}
              placeholder={!label ? (filterPlaceholder || "Selecione...") : ""}
              className={cn(
                "w-full bg-transparent border-none outline-none text-sm",
                !value && !inputValue && "text-gray-400"
              )}
            />
          ) : (
            <span className={cn("block truncate", !value && "text-gray-400")}>
              {options.find((opt) => opt.value === value)?.label ||
                (!label && "Selecione...")}
            </span>
          )}
          {isClearable && value && (
            <button
              type="button"
              tabIndex={-1}
              aria-label="Limpar seleção"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 bg-transparent p-1 rounded-full focus:outline-none"
              onClick={(e) => {
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
              }}
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
            maxHeight: open ? "9.5rem" : "0", // 3 options * 2.5rem + padding
            overflowY: options.length > 3 ? "auto" : "hidden",
            position: "fixed", // Use fixed positioning to escape container overflow
            top: open ? dropdownPosition.top : "auto",
            left: open ? dropdownPosition.left : "auto",
            width: open ? dropdownPosition.width : "auto",
            zIndex: 9999,
            boxShadow: open ? "var(--select-dropdown-shadow)" : "none",
          }}
        >
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-500 text-center">
              Nenhuma opção encontrada
            </div>
          ) : (
            filteredOptions.map((opt) => (
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
Select.displayName = "Select";

export { Select };
