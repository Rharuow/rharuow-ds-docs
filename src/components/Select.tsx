"use client";
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
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const componentRef = React.useRef<HTMLDivElement>(null);

    const form = useFormContext();
    const control = form?.control;
    const valueWatch =
      control && name ? useWatch({ control, name }) : undefined;
    const value = props.value ?? valueWatch ?? "";
    const error = form?.formState?.errors?.[name as string]?.message;

    // Floating label: label sobe se select está focado ou tem valor
    const isFloating = focused || !!value;

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
          onClick={handleContainerClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref as unknown as React.RefObject<HTMLDivElement>}
        >
          <span className={cn("block truncate", !value && "text-gray-400")}>
            {options.find((opt) => opt.value === value)?.label ||
              (!label && "Selecione...")}
          </span>
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
            "absolute left-0 w-full mt-1 rounded-md shadow-lg bg-white z-20 transition-all duration-200 overflow-hidden",
            open
              ? "border border-[var(--primary,#2563eb)] max-h-36 opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95 pointer-events-none"
          )}
          style={{
            maxHeight: open ? "9.5rem" : "0", // 3 options * 2.5rem + padding
            overflowY: options.length > 3 ? "auto" : "hidden",
          }}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              className={cn(
                "px-3 py-2 cursor-pointer hover:bg-blue-50 text-sm",
                value === opt.value && "bg-blue-100"
              )}
              onMouseDown={() => {
                if (form && name) form.setValue(name, opt.value);
                if (props.onChange) {
                  const event = {
                    target: { value: opt.value },
                  } as React.ChangeEvent<HTMLSelectElement>;
                  props.onChange(event);
                }
                setFocused(true);
              }}
            >
              {opt.label}
            </div>
          ))}
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
