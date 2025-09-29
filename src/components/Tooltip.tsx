import React, { useState, useRef, useEffect } from "react";
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
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible || !tooltipRef.current || !triggerRef.current) return;

    const tooltip = tooltipRef.current;
    const trigger = triggerRef.current;
    const rect = trigger.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    let newPosition = position;

    // Check if tooltip fits in viewport and adjust position if needed
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (position === "top" && rect.top < tooltipRect.height + 10) {
      newPosition = "bottom";
    } else if (position === "bottom" && rect.bottom + tooltipRect.height + 10 > viewportHeight) {
      newPosition = "top";
    } else if (position === "left" && rect.left < tooltipRect.width + 10) {
      newPosition = "right";
    } else if (position === "right" && rect.right + tooltipRect.width + 10 > viewportWidth) {
      newPosition = "left";
    }

    setActualPosition(newPosition);
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
    const base = "absolute z-[9999] pointer-events-none";
    
    switch (actualPosition) {
      case "top":
        return `${base} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
      case "bottom":
        return `${base} top-full left-1/2 transform -translate-x-1/2 mt-2`;
      case "left":
        return `${base} right-full top-1/2 transform -translate-y-1/2 mr-2`;
      case "right":
        return `${base} left-full top-1/2 transform -translate-y-1/2 ml-2`;
      default:
        return `${base} bottom-full left-1/2 transform -translate-x-1/2 mb-2`;
    }
  };

  const getArrowClasses = () => {
    const arrowBase = "absolute w-2 h-2 bg-[var(--tooltip-bg,#374151)] transform rotate-45";
    
    switch (actualPosition) {
      case "top":
        return `${arrowBase} top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
      case "bottom":
        return `${arrowBase} bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2`;
      case "left":
        return `${arrowBase} left-full top-1/2 transform -translate-y-1/2 -translate-x-1/2`;
      case "right":
        return `${arrowBase} right-full top-1/2 transform -translate-y-1/2 translate-x-1/2`;
      default:
        return `${arrowBase} top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
    }
  };

  if (disabled || !content) {
    return <>{children}</>;
  }

  return (
    <div 
      className="relative inline-block"
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={cn(
            getPositionClasses(),
            "px-2 py-1 text-sm rounded whitespace-nowrap",
            "bg-[var(--tooltip-bg,#374151)] text-[var(--tooltip-text,#fff)]",
            "shadow-[var(--tooltip-shadow,0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1))]",
            "transition-opacity duration-200 ease-in-out",
            className
          )}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
          <div className={getArrowClasses()} />
        </div>
      )}
    </div>
  );
};