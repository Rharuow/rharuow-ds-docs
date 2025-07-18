"use client";
import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { cn } from "../lib/utils";

export interface RadioOption {
  label: string;
  value: string;
  icon?: React.ReactNode; // opcional para ícones customizados
}

export interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  containerClassName?: string;
  optionClassName?: string;
  direction?: "row" | "col";
  size?: "sm" | "md" | "lg";
  value?: string;
  onChange?: (event: { target: { value: string } }) => void;
  className?: string;
  onFocus?: React.FocusEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  id?: string;
}

const sizeMap = {
  sm: "h-10 text-sm px-3",
  md: "h-12 text-base px-4",
  lg: "h-16 text-lg px-6",
};

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      label,
      options,
      className,
      containerClassName,
      optionClassName,
      direction = "row",
      size = "md",
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const form = useFormContext();
    const control = form?.control;
    const valueWatch = control && name ? useWatch({ control, name }) : undefined;
    const value = props.value ?? valueWatch ?? "";
    const error = form?.formState?.errors?.[name as string]?.message;
    const [focused, setFocused] = React.useState(false);
    const isFloating = focused || !!value;

    const handleChange = (val: string) => {
      if (form && name) form.setValue(name, val);
      if (props.onChange) {
        props.onChange({ target: { value: val } } as any);
      }
    };

    return (
      <div className={cn("relative", containerClassName)} ref={ref}>
        {label && (
          <label
            htmlFor={name}
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
        <div
          className={cn(
            "flex gap-2 w-full pt-6", // espaço para label flutuante
            direction === "row" ? "flex-row" : "flex-col",
            className
          )}
          aria-label={label}
          tabIndex={-1}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={cn(
                "relative flex items-center justify-center border rounded-lg transition-all duration-200 shadow-sm px-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover,#dbeafe)]",
                sizeMap[size],
                value === opt.value
                  ? "border-[var(--primary,#2563eb)] bg-[var(--primary-hover,#dbeafe)] text-[var(--primary,#2563eb)] ring-2 ring-[var(--primary-hover,#dbeafe)] shadow-md transform scale-[1.02]"
                  : "border-gray-200 bg-white text-gray-600 hover:border-[var(--primary,#2563eb)] hover:bg-[var(--primary-hover,#dbeafe)] hover:text-[var(--primary,#2563eb)] hover:shadow-md",
                optionClassName
              )}
              aria-pressed={value === opt.value}
              data-selected={value === opt.value}
              tabIndex={0}
              onClick={() => handleChange(opt.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleChange(opt.value);
                }
              }}
            >
              {opt.icon && (
                <span className="mr-2 text-lg flex items-center">{opt.icon}</span>
              )}
              <span className="truncate font-medium">{opt.label}</span>
            </button>
          ))}
        </div>
        {error && (
          <span className="text-red-500 text-xs mt-1 block">{error as string}</span>
        )}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
