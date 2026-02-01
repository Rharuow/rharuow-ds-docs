import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  className = "",
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || !triggerRef.current) return;

    const trigger = triggerRef.current;
    const rect = trigger.getBoundingClientRect();
    
    let newPosition = position;
    let top = 0;
    let left = 0;

    // Calculate base position
    switch (position) {
      case "top":
        top = rect.top - 8; // 8px gap
        left = rect.left + rect.width / 2;
        break;
      case "bottom":
        top = rect.bottom + 8; // 8px gap
        left = rect.left + rect.width / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2;
        left = rect.left - 8; // 8px gap
        break;
      case "right":
        top = rect.top + rect.height / 2;
        left = rect.right + 8; // 8px gap
        break;
    }

    // After first render, check if we need to adjust position
    if (tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Check if tooltip fits in viewport and adjust position if needed
      if (position === "top" && rect.top < tooltipRect.height + 16) {
        newPosition = "bottom";
        top = rect.bottom + 8;
      } else if (position === "bottom" && rect.bottom + tooltipRect.height + 16 > viewportHeight) {
        newPosition = "top";
        top = rect.top - 8;
      } else if (position === "left" && rect.left < tooltipRect.width + 16) {
        newPosition = "right";
        left = rect.right + 8;
      } else if (position === "right" && rect.right + tooltipRect.width + 16 > viewportWidth) {
        newPosition = "left";
        left = rect.left - 8;
      }
    }

    setActualPosition(newPosition);
    setTooltipStyle({ 
      position: 'fixed',
      top: `${top}px`, 
      left: `${left}px`,
      zIndex: 9999
    });
  }, [isVisible, position]);

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsVisible(true);
    }
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  const getPositionClasses = () => {
    const base = "pointer-events-none";
    
    switch (actualPosition) {
      case "top":
        return `${base} transform -translate-x-1/2 -translate-y-full`;
      case "bottom":
        return `${base} transform -translate-x-1/2`;
      case "left":
        return `${base} transform -translate-x-full -translate-y-1/2`;
      case "right":
        return `${base} transform -translate-y-1/2`;
      default:
        return `${base} transform -translate-x-1/2 -translate-y-full`;
    }
  };

  const getArrowClasses = () => {
    const arrowBase = "absolute w-2 h-2 bg-[var(--tooltip-bg)] transform rotate-45";
    
    switch (actualPosition) {
      case "top":
        return `${arrowBase} top-full left-1/2 -translate-x-1/2 -translate-y-1/2`;
      case "bottom":
        return `${arrowBase} bottom-full left-1/2 -translate-x-1/2 translate-y-1/2`;
      case "left":
        return `${arrowBase} left-full top-1/2 -translate-y-1/2 -translate-x-1/2`;
      case "right":
        return `${arrowBase} right-full top-1/2 -translate-y-1/2 translate-x-1/2`;
      default:
        return `${arrowBase} top-full left-1/2 -translate-x-1/2 -translate-y-1/2`;
    }
  };

  if (disabled || !content) {
    return <>{children}</>;
  }

  return (
    <>
      <div 
        className="relative inline-block"
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {children}
      </div>
      
      {isVisible && typeof document !== 'undefined' && createPortal(
        <div
          ref={tooltipRef}
          style={tooltipStyle}
          className={cn(
            getPositionClasses(),
            "px-2 py-1 text-sm rounded whitespace-nowrap",
            "bg-[var(--tooltip-bg)] text-[var(--tooltip-text)]",
            "shadow-[var(--tooltip-shadow,0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1))]",
            "transition-opacity duration-200 ease-in-out",
            className
          )}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
          <div className={getArrowClasses()} />
        </div>,
        document.body
      )}
    </>
  );
};