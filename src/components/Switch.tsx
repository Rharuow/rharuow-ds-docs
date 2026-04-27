"use client";
import React, { useId } from "react";
import { cn } from "../lib/utils";

interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /** Whether the switch is currently on */
  checked?: boolean;
  /** Callback fired when the switch is toggled */
  onChange?: (checked: boolean) => void;
  /** Label displayed next to the switch */
  label?: string;
  /** Position of the label relative to the switch */
  labelPosition?: "left" | "right";
  /** Size variant */
  size?: "sm" | "md" | "lg";
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  label,
  labelPosition = "right",
  size = "md",
  disabled = false,
  className = "",
  onClick,
  id: externalId,
  ...props
}) => {
  const internalId = useId();
  const id = externalId ?? internalId;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onChange?.(!checked);
      onClick?.(e);
    }
  };

  const trackSizes = {
    sm: "w-8 h-4",
    md: "w-11 h-6",
    lg: "w-14 h-8",
  };

  const thumbSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  const thumbTranslate = {
    sm: checked ? "translate-x-4" : "translate-x-0.5",
    md: checked ? "translate-x-6" : "translate-x-1",
    lg: checked ? "translate-x-7" : "translate-x-1",
  };

  const labelSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const switchButton = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      id={id}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center rounded-full shrink-0 transition-colors duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2",
        trackSizes[size],
        checked
          ? "bg-[var(--primary)]"
          : "bg-[var(--chip-inactive-border,#d1d5db)]",
        disabled && "opacity-40 cursor-not-allowed",
        !disabled && "cursor-pointer",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-block rounded-full bg-white text-[var(--primary)] shadow transition-transform duration-200",
          thumbSizes[size],
          thumbTranslate[size]
        )}
      />
    </button>
  );

  if (!label) return switchButton;

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-center gap-2 select-none",
        disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
      )}
    >
      {labelPosition === "left" && (
        <span className={cn("text-[var(--foreground,#111827)]", labelSizes[size])}>
          {label}
        </span>
      )}
      {switchButton}
      {labelPosition === "right" && (
        <span className={cn("text-[var(--foreground,#111827)]", labelSizes[size])}>
          {label}
        </span>
      )}
    </label>
  );
};
