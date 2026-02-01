import React from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  variant?: "default" | "primary" | "secondary";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

interface ModalComponent extends React.FC<ModalProps> {
  Header: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
  Footer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
}

export const Modal = (({
  open,
  onClose,
  size = "md",
  variant = "default",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className = "",
  ...props
}) => {
  const portalRoot = typeof document !== "undefined" ? document.body : null;

  // Handle escape key
  React.useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4",
  };

  const variantClasses = {
    default: "bg-white text-gray-900",
    primary: "bg-[var(--primary)] text-[var(--primary-text)]",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-text)]",
  };

  const closeButtonClasses = {
    default: "text-gray-400 hover:text-gray-600",
    primary: "text-[var(--primary-text)] hover:opacity-80",
    secondary: "text-[var(--secondary-text)] hover:opacity-80",
  };

  if (!portalRoot || !open) return null;

  const modal = (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={(e) => {
          if (!closeOnOverlayClick) return;
          if (e.target === e.currentTarget) onClose();
        }}
      />

      {/* Modal content */}
      <div
        role="dialog"
        aria-modal={true}
        className={cn(
          "relative rounded-lg shadow-xl w-full transition-all duration-200",
          sizeClasses[size],
          variantClasses[variant],
          open ? "scale-100 opacity-100" : "scale-95 opacity-0",
          className
        )}
        {...props}
      >
        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className={cn(
              "absolute top-4 right-4 transition-colors",
              closeButtonClasses[variant]
            )}
            aria-label="Fechar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return createPortal(modal, portalRoot);
}) as ModalComponent;

// Sub-components for better structure
Modal.Header = function ModalHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 pr-8", className)} {...props}>
      {children}
    </div>
  );
};

Modal.Body = function ModalBody({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
};

Modal.Footer = function ModalFooter({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex justify-end gap-2 mt-6 pt-4 border-t border-gray-200", className)}
      {...props}
    >
      {children}
    </div>
  );
};
