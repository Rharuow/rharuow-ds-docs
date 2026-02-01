import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const base = "px-4 py-2 rounded font-medium transition";
  const variants = {
    default:
      "bg-[var(--primary)] text-[var(--primary-text)] hover:bg-[var(--primary-hover)]",
    outline:
      "border border-[var(--primary)] text-[var(--primary)] bg-white hover:bg-[var(--primary-light)]",
    secondary:
      "bg-[var(--secondary)] text-[var(--secondary-text)] hover:bg-[var(--secondary-hover)]",
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
