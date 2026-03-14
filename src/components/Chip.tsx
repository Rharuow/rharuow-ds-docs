"use client";
import React from "react";
import { cn } from "../lib/utils";

interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /** Label text displayed inside the chip */
  label: string;
  /** Whether the chip is currently active/selected */
  active?: boolean;
  /** Callback fired when the chip is toggled */
  onChange?: (active: boolean) => void;
  /** Icon rendered before the label */
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  active = false,
  onChange,
  icon,
  disabled = false,
  className = "",
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      onChange?.(!active);
      onClick?.(e);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      aria-label={label}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        // Base
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium",
        "border transition-all duration-200 select-none cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-1",
        // Active state
        active
          ? "bg-[var(--primary)] text-[var(--chip-active-text)] border-[var(--primary)] hover:bg-[var(--primary-hover)] hover:border-[var(--primary-hover)]"
          : "bg-[var(--chip-inactive-bg)] text-[var(--chip-inactive-text)] border-[var(--chip-inactive-border)] hover:bg-[var(--chip-inactive-hover-bg)] hover:border-[var(--primary)]",
        // Disabled state
        disabled && "opacity-40 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </button>
  );
};
