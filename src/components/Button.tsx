import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "icon";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const base = "rounded font-medium transition";
  const variants = {
    default:
      "bg-[var(--primary)] text-[var(--primary-text)] hover:bg-[var(--primary-hover)]",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] bg-white hover:bg-[var(--primary-light)]",
    secondary:
      "bg-[var(--secondary)] text-[var(--secondary-text)] hover:bg-[var(--secondary-hover)]",
    icon: "inline-flex items-center justify-center bg-[var(--primary)] text-[var(--primary-text)] hover:bg-[var(--primary-hover)]",
  };
  const sizes = {
    xl: "px-8 py-4 text-xl",
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-base",
    sm: "px-3 py-1.5 text-sm",
    xs: "px-2 py-1 text-xs",
  };
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};
