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
      "bg-[var(--primary,#2563eb)] text-[var(--primary-text,#fff)] hover:bg-[var(--primary-hover,#1d4ed8)]",
    outline:
      "border border-[var(--primary,#2563eb)] text-[var(--primary,#2563eb)] bg-white hover:bg-[var(--primary-hover,#e0e7ff)]",
    secondary:
      "bg-[var(--secondary,#fbbf24)] text-[var(--secondary-text,#222)] hover:bg-[var(--secondary-hover,#f59e42)]",
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
