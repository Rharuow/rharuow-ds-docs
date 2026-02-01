import * as React from "react";
import { useFormContext, useWatch } from "react-hook-form";

import { cn } from "../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export interface TextareaCustomProps {
  name: string;
  label?: string;
  Icon?: React.ElementType;
  iconClassName?: string;
  containerClassName?: string;
  iconAction?: React.MouseEventHandler<HTMLDivElement>;
}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps & TextareaCustomProps
>(
  (
    {
      name,
      className,
      label,
      onFocus,
      onBlur,
      Icon,
      iconClassName,
      iconAction,
      containerClassName,
      rows = 4,
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

    // Floating label: label sobe se textarea está focado ou tem valor
    const isFloating = focused || !!value;

    return (
      <div className={cn("relative", containerClassName)}>
        <textarea
          id={props.id || name}
          rows={rows}
          className={cn(
            "peer flex min-h-[80px] w-full border border-[var(--primary)] rounded-md bg-[var(--input-bg)] text-[var(--text-primary)] px-3 pt-6 pb-2 text-sm placeholder-transparent transition focus:outline-none focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50 resize-vertical",
            Icon ? "pr-12" : "", // espaço extra para ícone customizado
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
                  ref: (node: HTMLTextAreaElement) => {
                    if (typeof ref === "function") ref(node);
                    else if (ref)
                      (
                        ref as React.RefObject<HTMLTextAreaElement | null>
                      ).current = node;
                    if (registered.ref) registered.ref(node);
                  },
                  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => {
                    setFocused(false);
                    if (onBlur) onBlur(event);
                    if (originalOnBlur) originalOnBlur(event);
                  },
                };
              })()
            : {
                ref,
                onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => {
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
                ? "top-0 scale-90 -translate-y-1 text-xs text-[var(--primary)] p-1 rounded-full bg-white"
                : "top-3 scale-100 translate-y-0.5"
            )}
          >
            {label}
          </label>
        )}

        {/* Ícone customizado */}
        {Icon && (
          <div
            className={cn(
              "absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-[var(--primary)] transition-colors duration-200",
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
Textarea.displayName = "Textarea";

export { Textarea };
