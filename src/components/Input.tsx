"use client";
import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface CustomProps {
  name: string;
  label?: string;
  Icon?: React.ElementType;
  iconClassName?: string;
  containerClassName?: string;
  iconAction?: React.MouseEventHandler<HTMLDivElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps & CustomProps>(
  (
    {
      name,
      className,
      type = "text",
      label,
      onFocus,
      onBlur,
      Icon,
      iconClassName,
      iconAction,
      containerClassName,
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

    const value = props.value ?? valueWatch ?? "";

    const error = form?.formState?.errors?.[name as string]?.message;

    // Floating label: label sobe se input está focado ou tem valor
    const isFloating = focused || !!value;

    return (
      <div className={cn("relative", containerClassName)}>
        <input
          id={props.id || name}
          type={type}
          className={cn(
            "peer flex h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 pt-6 pb-2 text-sm placeholder-transparent transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          onFocus={(event) => {
            setFocused(true);
            onFocus && onFocus(event);
          }}
          // Merge register's ref with custom ref to avoid duplication
          {...(form && name
            ? (() => {
                const registered = register(name);
                const originalOnBlur = registered.onBlur;
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
                  onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                    setFocused(false);
                    if (onBlur) onBlur(event);
                    if (originalOnBlur) originalOnBlur(event);
                  },
                };
              })()
            : {
                ref,
                onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
                  setFocused(false);
                  if (onBlur) onBlur(event);
                },
              })}
          {...props}
        />
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
        {Icon && (
          <div
            className={cn(
              "absolute top-1/2 right-3 -translate-y-1/2 text-white",
              iconClassName
            )}
            onClick={iconAction}
          >
            <Icon />
          </div>
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
Input.displayName = "Input";

export { Input };
