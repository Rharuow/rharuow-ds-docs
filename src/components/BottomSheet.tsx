"use client";
import React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

export interface BottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "full" | string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  lockBodyScroll?: boolean;
  closeOnDragDown?: boolean;
  dragCloseThreshold?: number;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  onClose,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockBodyScroll = true,
  closeOnDragDown = true,
  dragCloseThreshold = 100,
  children,
  className = "",
  ...props
}) => {
  const portalRoot = typeof document !== "undefined" ? document.body : null;
  const [dragOffset, setDragOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const touchStartY = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!open || !closeOnEscape) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeOnEscape, onClose]);

  React.useEffect(() => {
    if (!lockBodyScroll) return;

    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, lockBodyScroll]);

  React.useEffect(() => {
    if (!open) {
      setDragOffset(0);
      setIsDragging(false);
      touchStartY.current = null;
    }
  }, [open]);

  const maxHeightClass =
    size === "sm"
      ? "max-h-[40vh]"
      : size === "md"
      ? "max-h-[60vh]"
      : size === "lg"
      ? "max-h-[80vh]"
      : size === "full"
      ? "max-h-[calc(100dvh-1rem)]"
      : undefined;

  const customStyle =
    typeof size === "string" && !["sm", "md", "lg", "full"].includes(size)
      ? { maxHeight: size }
      : undefined;

  const sheetStyle: React.CSSProperties = {
    ...(customStyle ?? {}),
    ...(open && dragOffset > 0 ? { transform: `translateY(${dragOffset}px)` } : {}),
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!closeOnDragDown || !open) return;
    touchStartY.current = event.touches[0]?.clientY ?? null;
    setIsDragging(true);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!closeOnDragDown || !isDragging || touchStartY.current === null) return;

    const currentY = event.touches[0]?.clientY ?? touchStartY.current;
    const delta = currentY - touchStartY.current;

    if (delta <= 0) {
      setDragOffset(0);
      return;
    }

    setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    if (!closeOnDragDown) return;

    setIsDragging(false);
    touchStartY.current = null;

    if (dragOffset >= dragCloseThreshold) {
      setDragOffset(0);
      onClose();
      return;
    }

    setDragOffset(0);
  };

  const sheet = (
    <div
      aria-hidden={!open}
      className={cn(
        "md:hidden fixed inset-0 z-50 flex items-end",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
        onMouseDown={(event) => {
          if (!closeOnOverlayClick) return;
          if (event.target === event.currentTarget) onClose();
        }}
      />

      <div
        role="dialog"
        aria-modal={true}
        className={cn(
          "relative w-full overflow-auto rounded-t-2xl border-t border-gray-200",
          "bg-[var(--bottom-sheet-bg,var(--aside-bg,#ffffff))] shadow-2xl",
          isDragging ? "transition-none" : "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "translate-y-full",
          maxHeightClass,
          className
        )}
        style={sheetStyle}
        {...props}
      >
        <div
          className="sticky top-0 z-10 flex justify-center bg-inherit pb-1 pt-2 touch-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div className="h-1.5 w-12 rounded-full bg-black/20" />
        </div>
        {children}
      </div>
    </div>
  );

  if (!portalRoot) return null;

  return createPortal(sheet, portalRoot);
};

BottomSheet.displayName = "BottomSheet";

export default BottomSheet;
