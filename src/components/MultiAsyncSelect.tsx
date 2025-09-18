import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { cn } from "../lib/utils";
import type { SelectOption } from "./types";

export interface MultiAsyncSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLDivElement>, 'options'> {
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
  maxSelectedDisplay?: number;
}

const MultiAsyncSelect = React.forwardRef<HTMLDivElement, MultiAsyncSelectProps>(
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
      maxSelectedDisplay = 3,
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
    const componentRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const form = useFormContext();
    const control = form?.control;
    const valueWatch =
      control && name ? useWatch({ control, name }) : undefined;
    const value: string[] = props.value ?? valueWatch ?? [];
    const error = form?.formState?.errors?.[name as string]?.message;

    const isFloating = focused || (value && value.length > 0);

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
      if (onFocus) onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
      if (onBlur) onBlur(event);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleOptionClick = (optValue: string) => {
      let newValue: string[];
      if (value.includes(optValue)) {
        newValue = value.filter((v) => v !== optValue);
      } else {
        newValue = [...value, optValue];
      }
      
      if (form && name) form.setValue(name, newValue);
      if (props.onChange) {
        props.onChange({
          target: { value: newValue },
        } as any);
      }
      setFocused(true);
    };

    const handleRemoveOption = (optValue: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const newValue = value.filter((v) => v !== optValue);
      if (form && name) form.setValue(name, newValue);
      if (props.onChange) {
        props.onChange({
          target: { value: newValue },
        } as any);
      }
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (form && name) form.setValue(name, []);
      if (props.onChange) {
        props.onChange({
          target: { value: [] },
        } as any);
      }
      setOpen(false);
      setFocused(false);
      setInputValue("");
    };

    const selectedOptions = options.filter(opt => value.includes(opt.value));
    const displayedOptions = selectedOptions.slice(0, maxSelectedDisplay);
    const remainingCount = selectedOptions.length - maxSelectedDisplay;

    return (
      <div className={cn("relative", containerClassName)} ref={componentRef}>
        <div
          id={props.id || name}
          tabIndex={searchable ? -1 : 0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            "peer flex items-center min-h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 py-2 text-sm transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer relative",
            className
          )}
          onClick={handleContainerClick}
          onFocus={!searchable ? handleFocus : undefined}
          onBlur={!searchable ? handleBlur : undefined}
          ref={ref}
        >
          <div className="flex flex-wrap gap-1 items-center min-h-[1.5rem] w-full">
            {/* Selected options display */}
            {displayedOptions.map((opt) => (
              <span
                key={opt.value}
                className="flex items-center border border-blue-200 bg-blue-50 text-blue-700 rounded-2xl px-3 py-1 text-xs shadow-sm gap-2"
                style={{ maxWidth: "140px" }}
              >
                <span className="truncate" title={opt.label}>
                  {opt.label}
                </span>
                <button
                  type="button"
                  className="ml-1 text-[var(--primary,#2563eb)] hover:text-red-500 focus:outline-none w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-150"
                  aria-label={`Remover ${opt.label}`}
                  tabIndex={-1}
                  onClick={(e) => handleRemoveOption(opt.value, e)}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3L9 9M9 3L3 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </span>
            ))}
            
            {/* Show remaining count if more items selected */}
            {remainingCount > 0 && (
              <span className="flex items-center border border-gray-200 bg-gray-100 text-gray-600 rounded-2xl px-3 py-1 text-xs">
                +{remainingCount} mais
              </span>
            )}

            {/* Search input or placeholder */}
            {searchable ? (
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={value.length === 0 && !label ? "Selecione..." : ""}
                className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm"
              />
            ) : (
              value.length === 0 && !label && (
                <span className="text-gray-400 text-sm">Selecione...</span>
              )
            )}
          </div>

          {loading && (
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[var(--primary,#2563eb)]"></div>
            </div>
          )}

          {isClearable && value && value.length > 0 && !loading && (
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
            "absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",
            open
              ? "border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          )}
          style={{
            maxHeight: open ? "9.5rem" : "0",
            overflowY: options.length > 3 ? "auto" : "hidden",
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
                  "px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm flex items-center gap-2",
                  value.includes(opt.value) && "bg-blue-100 font-semibold"
                )}
                onMouseDown={() => handleOptionClick(opt.value)}
              >
                <input
                  type="checkbox"
                  checked={value.includes(opt.value)}
                  readOnly
                  className="accent-blue-500"
                />
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

MultiAsyncSelect.displayName = "MultiAsyncSelect";

export { MultiAsyncSelect };
