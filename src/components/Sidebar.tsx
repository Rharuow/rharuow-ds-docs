"use client";
import React from "react";
import { cn } from "../lib/utils";

export type SidebarSide = "left" | "right";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  open: boolean;
  side?: SidebarSide;
  size?: "sm" | "md" | "lg" | string;
}

/**
 * Sidebar — a persistent lateral panel for md+ screens.
 * Unlike AsideSheet, it has no overlay and is not rendered via a portal.
 * It uses fixed positioning and translates in/out without blocking content.
 */
export const Sidebar: React.FC<SidebarProps> = ({
  open,
  side = "left",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const widthClass =
    size === "sm"
      ? "w-64"
      : size === "md"
      ? "w-72"
      : size === "lg"
      ? "w-96"
      : undefined;

  const customStyle =
    typeof size === "string" && !["sm", "md", "lg"].includes(size)
      ? { width: size }
      : undefined;

  return (
    <aside
      role="navigation"
      aria-expanded={open}
      className={cn(
        // Only visible/usable on md+ screens
        "hidden md:flex md:flex-col",
        "fixed top-0 h-full z-40",
        "bg-[var(--sidebar-bg,var(--aside-bg,#ffffff))]",
        "shadow-lg border-gray-200 overflow-y-auto",
        "transition-transform duration-300 ease-in-out",
        // Positioning and slide direction
        side === "left"
          ? cn("left-0 border-r", open ? "translate-x-0" : "-translate-x-full")
          : cn("right-0 border-l", open ? "translate-x-0" : "translate-x-full"),
        widthClass,
        className
      )}
      style={customStyle}
      {...props}
    >
      {children}
    </aside>
  );
};
