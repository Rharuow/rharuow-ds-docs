import React, { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

// Interface para o item do accordion
export interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  icon?: React.ReactNode;
}

// Interface para o Accordion principal
export interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple"; // single: apenas um item aberto por vez, multiple: vários podem estar abertos
  className?: string;
  variant?: "default" | "bordered" | "separated";
  collapsible?: boolean; // se true, permite fechar todos os itens no modo single
}

// Context para gerenciar o estado do accordion
interface AccordionContextType {
  type: "single" | "multiple";
  openItems: Set<number>;
  toggleItem: (index: number) => void;
  collapsible: boolean;
  variant: "default" | "bordered" | "separated";
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }
  return context;
};

// Componente AccordionItem
let itemIndexCounter = 0;

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  className,
  headerClassName,
  contentClassName,
  icon,
}) => {
  const { openItems, toggleItem, variant } = useAccordion();
  const [itemIndex] = useState(() => itemIndexCounter++);
  const isOpen = openItems.has(itemIndex);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      if (contentEl) {
        setHeight(contentEl.scrollHeight);
      }
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const handleClick = () => {
    if (!disabled) {
      toggleItem(itemIndex);
    }
  };

  const variantStyles = {
    default: {
      item: "border-b border-[var(--accordion-border,#e5e7eb)] last:border-b-0",
      header: "",
      content: "",
    },
    bordered: {
      item: "border border-[var(--accordion-border,#e5e7eb)] rounded-md mb-2",
      header: "border-b border-[var(--accordion-border,#e5e7eb)]",
      content: "",
    },
    separated: {
      item: "border border-[var(--accordion-border,#e5e7eb)] rounded-md mb-3 shadow-sm",
      header: "",
      content: "",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <div className={cn(currentVariant.item, className)}>
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        aria-expanded={isOpen}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
          "bg-[var(--accordion-header-bg,transparent)]",
          "hover:bg-[var(--accordion-header-hover,rgba(0,0,0,0.05))]",
          "text-[var(--accordion-text,#111827)]",
          "font-medium",
          disabled && "opacity-50 cursor-not-allowed",
          isOpen && variant !== "default" && currentVariant.header,
          headerClassName
        )}
      >
        <span className="flex items-center gap-2">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          {title}
        </span>
        <svg
          className={cn(
            "w-5 h-5 transition-transform duration-200 flex-shrink-0",
            "text-[var(--accordion-icon,#6b7280)]",
            isOpen && "rotate-180"
          )}
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <div
          ref={contentRef}
          className={cn(
            "px-4 py-3",
            "text-[var(--accordion-content-text,#374151)]",
            "bg-[var(--accordion-content-bg,transparent)]",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

// Reset counter when needed
AccordionItem.displayName = "AccordionItem";

// Componente Accordion principal
export const Accordion: React.FC<AccordionProps> & {
  Item: typeof AccordionItem;
} = ({
  children,
  type = "single",
  className,
  variant = "default",
  collapsible = true,
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  // Reset counter on mount
  useEffect(() => {
    itemIndexCounter = 0;
    
    // Initialize default open items
    const items = React.Children.toArray(children);
    const defaultOpenIndices = new Set<number>();
    
    items.forEach((child, index) => {
      if (React.isValidElement<AccordionItemProps>(child) && child.props.defaultOpen) {
        defaultOpenIndices.add(index);
      }
    });

    if (type === "single" && defaultOpenIndices.size > 1) {
      // If multiple items are set to defaultOpen in single mode, only keep the first one
      const firstOpen = Array.from(defaultOpenIndices)[0];
      setOpenItems(new Set([firstOpen]));
    } else {
      setOpenItems(defaultOpenIndices);
    }
  }, [children, type]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      
      if (type === "single") {
        if (newSet.has(index)) {
          // Trying to close the currently open item
          if (collapsible) {
            newSet.clear();
          }
          // If not collapsible, keep it open (do nothing)
        } else {
          // Opening a new item, close all others
          newSet.clear();
          newSet.add(index);
        }
      } else {
        // Multiple mode
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
      }
      
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider
      value={{ type, openItems, toggleItem, collapsible, variant }}
    >
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
