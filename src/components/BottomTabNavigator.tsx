"use client";
import React from "react";
import { cn } from "../lib/utils";

export interface BottomTabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface BottomTabNavigatorProps extends React.HTMLAttributes<HTMLElement> {
  items: BottomTabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

/**
 * BottomTabNavigator
 * Mobile-only bottom navigation (hidden on md+), useful as a persistent app navigator.
 */
export const BottomTabNavigator: React.FC<BottomTabNavigatorProps> = ({
  items,
  value,
  defaultValue,
  onValueChange,
  className = "",
  ...props
}) => {
  const firstEnabledItem = React.useMemo(
    () => items.find((item) => !item.disabled)?.id,
    [items]
  );

  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue ?? firstEnabledItem
  );

  React.useEffect(() => {
    if (value !== undefined) return;
    if (!items.some((item) => item.id === internalValue && !item.disabled)) {
      setInternalValue(firstEnabledItem);
    }
  }, [items, internalValue, firstEnabledItem, value]);

  const selectedValue = value ?? internalValue;

  const setValue = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <nav
      role="tablist"
      aria-label="Bottom navigation"
      className={cn(
        "md:hidden fixed inset-x-0 bottom-0 z-40",
        "border-t border-gray-200",
        "bg-[var(--bottom-tab-bg,var(--sidebar-bg,var(--aside-bg,#ffffff)))]",
        "shadow-[0_-8px_20px_rgba(0,0,0,0.08)]",
        "pb-[max(0.5rem,env(safe-area-inset-bottom))]",
        className
      )}
      {...props}
    >
      <div
        className="mx-auto grid max-w-3xl gap-1 px-2 pt-2"
        style={{ gridTemplateColumns: `repeat(${Math.max(items.length, 1)}, minmax(0, 1fr))` }}
      >
        {items.map((item) => {
          const isActive = item.id === selectedValue;

          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-disabled={item.disabled}
              disabled={item.disabled}
              onClick={() => {
                if (item.disabled) return;
                setValue(item.id);
              }}
              className={cn(
                "relative flex min-h-[3.25rem] w-full flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-xs font-medium transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-1",
                isActive
                  ? "bg-[var(--primary-light)] text-[var(--primary)]"
                  : "text-[var(--text-muted)] hover:bg-black/5",
                item.disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {item.icon ? (
                <span className="text-base leading-none" aria-hidden>
                  {item.icon}
                </span>
              ) : null}

              <span className="truncate">{item.label}</span>

              {item.badge ? (
                <span className="absolute right-2 top-1 text-[10px] leading-none">{item.badge}</span>
              ) : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
