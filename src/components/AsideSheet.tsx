import React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

export type AsideSide = "left" | "right";

export interface AsideSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  side?: AsideSide;
  size?: "sm" | "md" | "lg" | string; // allow custom width like '480px'
  closeOnOverlayClick?: boolean;
}

export const AsideSheet: React.FC<AsideSheetProps> = ({
  open,
  onClose,
  side = "right",
  size = "md",
  closeOnOverlayClick = true,
  children,
  className = "",
  ...props
}) => {
  const portalRoot = typeof document !== "undefined" ? document.body : null;

  const widthClass =
    size === "sm"
      ? "w-64"
      : size === "md"
      ? "w-96"
      : size === "lg"
      ? "w-[36rem]"
      : undefined;

  const customStyle = typeof size === "string" && !["sm", "md", "lg"].includes(size)
    ? { width: size }
    : undefined;

  const sheet = (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 flex",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
        onMouseDown={(e) => {
          if (!closeOnOverlayClick) return;
          // only trigger when clicking the overlay (not children)
          if (e.target === e.currentTarget) onClose();
        }}
      />

      {/* Sheet container to align left or right */}
      <div
        className={cn(
          "relative h-full",
          side === "right" ? "ml-auto" : "mr-auto",
          // ensure the sheet doesn't shrink
          "flex-shrink-0"
        )}
        style={customStyle}
      >
        <aside
          role="dialog"
          aria-modal={true}
          className={cn(
            "h-full bg-[var(--aside-bg)] shadow-xl border-l border-gray-100 overflow-auto transition-transform duration-300",
            side === "right"
              ? open
                ? "translate-x-0"
                : "translate-x-full"
              : open
              ? "translate-x-0"
              : "-translate-x-full",
            widthClass,
            className
          )}
          style={customStyle}
          {...props}
        >
          {children}
        </aside>
      </div>
    </div>
  );

  if (!portalRoot) return null;

  return createPortal(sheet, portalRoot);
};

AsideSheet.displayName = "AsideSheet";

export default AsideSheet;
