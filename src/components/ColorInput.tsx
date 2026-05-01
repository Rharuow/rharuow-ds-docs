"use client";
import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { cn } from "../lib/utils";

export interface ColorInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label?: string;
  containerClassName?: string;
}

const ColorInput = React.forwardRef<HTMLInputElement, ColorInputProps>(
  (
    {
      name,
      className,
      label,
      onBlur,
      onChange,
      containerClassName,
      value: valueProp,
      defaultValue: defaultValueProp,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);

    const form = useFormContext();
    const control = form?.control;
    const register = form?.register;
    const valueWatch =
      control && name ? useWatch({ control, name }) : undefined;

    const value = valueProp ?? valueWatch ?? defaultValueProp ?? "#000000";

    const error = form?.formState?.errors?.[name as string]?.message;

    const isFloating = focused || !!value;

    return (
      <div className={cn("relative", containerClassName)}>
        <div
          className={cn(
            "flex h-12 w-full border border-[var(--primary)] rounded-md bg-[var(--input-bg)] text-[var(--foreground)] px-3 pt-6 pb-2 text-sm transition focus-within:outline-none focus-within:border-[var(--primary)]",
            error ? "border-red-500" : "",
            className
          )}
        >
          <div className="flex items-center gap-2 w-full">
            <input
              id={props.id || name}
              type="color"
              className="h-6 w-8 cursor-pointer rounded border-0 bg-transparent p-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              {...(form && name
                ? (() => {
                    const registered = register(name);
                    const originalOnBlur = registered.onBlur;
                    const originalOnChange = registered.onChange;
                    return {
                      ...registered,
                      ref: (node: HTMLInputElement) => {
                        if (typeof ref === "function") ref(node);
                        else if (ref)
                          (
                            ref as React.RefObject<HTMLInputElement | null>
                          ).current = node;
                        if (registered.ref) registered.ref(node);
                      },
                      onFocus: () => setFocused(true),
                      onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                        setFocused(false);
                        if (onBlur) onBlur(event);
                        if (originalOnBlur) originalOnBlur(event);
                      },
                      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        if (originalOnChange) originalOnChange(event);
                        if (onChange) onChange(event);
                      },
                    };
                  })()
                : {
                    ref,
                    value: valueProp,
                    defaultValue: valueProp === undefined ? (defaultValueProp ?? "#000000") : undefined,
                    onFocus: () => setFocused(true),
                    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                      setFocused(false);
                      if (onBlur) onBlur(event);
                    },
                    onChange,
                  })}
              {...props}
            />
            <span className="text-sm text-[var(--foreground)] font-mono select-none">
              {String(value).toUpperCase()}
            </span>
          </div>
        </div>

        {label && (
          <label
            htmlFor={props.id || name}
            style={
              isFloating
                ? { top: "-14px", transform: "scale(0.9)", transformOrigin: "0 0" }
                : { top: "14px", transform: "scale(1)", transformOrigin: "0 0" }
            }
            className={cn(
              "absolute left-3 z-10 cursor-text select-none text-[var(--foreground)] transition-all duration-200",
              isFloating
                ? "text-xs p-1 rounded-full bg-white text-[var(--primary)]"
                : "text-sm"
            )}
          >
            {label}
          </label>
        )}

        {error && (
          <span className="text-red-500 text-xs mt-1 block">
            {error as string}
          </span>
        )}
      </div>
    );
  }
);

ColorInput.displayName = "ColorInput";

export { ColorInput };
