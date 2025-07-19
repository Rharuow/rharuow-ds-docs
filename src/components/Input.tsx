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
    const [showPassword, setShowPassword] = React.useState(false);

    const form = useFormContext();
    const control = form?.control;
    const register = form?.register;
    const valueWatch =
      control && name ? useWatch({ control, name }) : undefined;

    const value = props.value ?? valueWatch ?? "";

    const error = form?.formState?.errors?.[name as string]?.message;

    // Floating label: label sobe se input está focado ou tem valor
    const isFloating = focused || !!value;

    // Para inputs de password, o type real depende do estado showPassword
    const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

    // Ícones de olho para password
    const EyeOpenIcon = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          fill="currentColor"
        />
      </svg>
    );

    const EyeClosedIcon = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
          fill="currentColor"
        />
      </svg>
    );

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={cn("relative", containerClassName)}>
        <input
          id={props.id || name}
          type={inputType}
          className={cn(
            "peer flex h-12 w-full border border-[var(--primary,#2563eb)] rounded-md bg-[var(--input-bg,#fff)] text-[var(--input-text,#222)] px-3 pt-6 pb-2 text-sm placeholder-transparent transition focus:outline-none focus:border-[var(--primary,#2563eb)] disabled:cursor-not-allowed disabled:opacity-50",
            (type === "password" || Icon) ? "pr-12" : "", // espaço extra para qualquer ícone (password ou customizado)
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
        
        {/* Ícone de senha (tem prioridade sobre ícone customizado) */}
        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-[var(--primary,#2563eb)] transition-colors duration-200 focus:outline-none focus:text-[var(--primary,#2563eb)]"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
            tabIndex={-1}
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </button>
        )}
        
        {/* Ícone customizado (só aparece se NÃO for password e Icon for fornecido) */}
        {Icon && type !== "password" && (
          <div
            className={cn(
              "absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-[var(--primary,#2563eb)] transition-colors duration-200",
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
