"use client";
import * as React from "react";

import { cn } from "../lib/utils";
import { useFormContext, useWatch } from "react-hook-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface CustomProps {
  label?: string;
  Icon?: React.ElementType;
  iconClassName?: string;
  containerClassName?: string;
  iconAction?: React.MouseEventHandler<HTMLDivElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps & CustomProps>(
  (
    {
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
    const valueWatch =
      control && props.name
        ? useWatch({ control, name: String(props.name) })
        : undefined;

    const value = props.value ?? valueWatch ?? "";
    const error = form?.formState?.errors?.[props.name as string]?.message;

    // Floating label: label sobe se input está focado ou tem valor
    const isFloating = focused || !!value;

    return (
      <div className={cn("relative", containerClassName)}>
        <input
          id={props.id || props.name}
          type={type}
          className={cn(
            "peer flex h-12 w-full border border-input rounded-md bg-transparent px-3 pt-6 pb-2 text-sm text-white placeholder-transparent transition focus:outline-none focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          onFocus={(event) => {
            setFocused(true);
            onFocus && onFocus(event);
          }}
          onBlur={(event) => {
            setFocused(false);
            onBlur && onBlur(event);
          }}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id || props.name}
            className={cn(
              "absolute left-3 top-3 z-10 origin-[0] cursor-text select-none text-sm text-gray-400 transition-all duration-200",
              isFloating
                ? "scale-90 -translate-y-3 text-xs text-blue-400"
                : "scale-100 translate-y-0"
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
