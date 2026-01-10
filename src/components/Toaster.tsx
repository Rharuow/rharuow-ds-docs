import React, { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

export type ToastVariant = "success" | "error" | "warning" | "info" | "default";
export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Toast {
  id: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
}

interface ToasterContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

const ToasterContext = createContext<ToasterContextValue | null>(null);

export interface ToasterProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
  maxToasts?: number;
}

export const ToasterProvider: React.FC<ToasterProviderProps> = ({
  children,
  position = "top-right",
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newToast: Toast = { ...toast, id };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        return updated.slice(-maxToasts);
      });

      // Auto-dismiss
      if (toast.duration !== 0) {
        const duration = toast.duration || 5000;
        setTimeout(() => {
          removeToast(id);
          toast.onClose?.();
        }, duration);
      }

      return id;
    },
    [maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToasterContext.Provider value={{ toasts, addToast, removeToast, clearAll }}>
      {children}
      <ToasterContainer toasts={toasts} position={position} onClose={removeToast} />
    </ToasterContext.Provider>
  );
};

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error("useToaster must be used within ToasterProvider");
  }
  return context;
};

// Helper hook for common toast actions
export const useToast = () => {
  const { addToast } = useToaster();

  return {
    toast: (message: string, options?: Omit<Toast, "id" | "message">) => {
      return addToast({ message, ...options });
    },
    success: (message: string, duration?: number) => {
      return addToast({ message, variant: "success", duration });
    },
    error: (message: string, duration?: number) => {
      return addToast({ message, variant: "error", duration });
    },
    warning: (message: string, duration?: number) => {
      return addToast({ message, variant: "warning", duration });
    },
    info: (message: string, duration?: number) => {
      return addToast({ message, variant: "info", duration });
    },
  };
};

interface ToasterContainerProps {
  toasts: Toast[];
  position: ToastPosition;
  onClose: (id: string) => void;
}

const ToasterContainer: React.FC<ToasterContainerProps> = ({
  toasts,
  position,
  onClose,
}) => {
  const portalRoot = typeof document !== "undefined" ? document.body : null;

  if (!portalRoot || toasts.length === 0) return null;

  const positionClasses = {
    "top-left": "top-4 left-4 items-start",
    "top-center": "top-4 left-1/2 -translate-x-1/2 items-center",
    "top-right": "top-4 right-4 items-end",
    "bottom-left": "bottom-4 left-4 items-start",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2 items-center",
    "bottom-right": "bottom-4 right-4 items-end",
  };

  const container = (
    <div
      className={cn(
        "fixed z-[100] flex flex-col gap-2 pointer-events-none",
        positionClasses[position]
      )}
      style={{ maxWidth: "calc(100vw - 2rem)" }}
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );

  return createPortal(container, portalRoot);
};

interface ToastItemProps {
  toast: Toast;
  onClose: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(toast.id);
      toast.onClose?.();
    }, 200);
  };

  const variantStyles = {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    info: "bg-blue-50 text-blue-800 border-blue-200",
    default: "bg-white text-gray-800 border-gray-200",
  };

  const iconMap = {
    success: (
      <svg
        className="w-5 h-5 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    error: (
      <svg
        className="w-5 h-5 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    warning: (
      <svg
        className="w-5 h-5 text-yellow-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    info: (
      <svg
        className="w-5 h-5 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    default: (
      <svg
        className="w-5 h-5 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const variant = toast.variant || "default";

  return (
    <div
      role="alert"
      className={cn(
        "pointer-events-auto flex items-start gap-3 px-4 py-3 rounded-lg border shadow-lg min-w-[300px] max-w-[500px]",
        "transition-all duration-200 ease-in-out",
        isExiting
          ? "opacity-0 scale-95 translate-x-4"
          : "opacity-100 scale-100 translate-x-0",
        variantStyles[variant]
      )}
    >
      <div className="flex-shrink-0 mt-0.5">{iconMap[variant]}</div>
      <p className="flex-1 text-sm font-medium leading-relaxed">{toast.message}</p>
      <button
        onClick={handleClose}
        className="flex-shrink-0 text-current opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Fechar notificação"
      >
        <svg
          className="w-4 h-4"
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
    </div>
  );
};
