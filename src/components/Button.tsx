import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "icon";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const base = "rounded font-medium transition";
  const variants = {
    default:
      "px-4 py-2 bg-[var(--primary)] text-[var(--primary-text)] hover:bg-[var(--primary-hover)]",
    outline:
      "px-4 py-2 border border-[var(--primary)] text-[var(--primary)] bg-white hover:bg-[var(--primary-light)]",
    secondary:
      "px-4 py-2 bg-[var(--secondary)] text-[var(--secondary-text)] hover:bg-[var(--secondary-hover)]",
    icon: "p-2 inline-flex items-center justify-center bg-[var(--primary)] text-[var(--primary-text)] hover:bg-[var(--primary-hover)]",
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
