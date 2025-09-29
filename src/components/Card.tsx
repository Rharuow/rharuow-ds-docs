import React from "react";
import { cn } from "../lib/utils";

// Interface base para componentes do Card
interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

// Card Header Props
export interface CardHeaderProps extends BaseCardProps {
  as?: 'div' | 'header';
}

// Card Body Props  
export interface CardBodyProps extends BaseCardProps {
  as?: 'div' | 'main' | 'section';
}

// Card Footer Props
export interface CardFooterProps extends BaseCardProps {
  as?: 'div' | 'footer';
}

// Card Principal Props
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'flat';
  size?: 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  constrainWidth?: boolean; // Nova prop para controlar se deve aplicar max-width
}

// Card Header Component
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "px-6 py-4 border-b",
          "bg-[var(--card-header-bg,rgba(249,250,251,0.5))]",
          "border-[var(--card-header-border,#e5e7eb)]",
          "text-[var(--card-text,#111827)]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardHeader.displayName = "CardHeader";

// Card Body Component
const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "px-6 py-4",
          "flex-1", // Para ocupar o espaço disponível
          "bg-[var(--card-bg,#ffffff)]",
          "text-[var(--card-text,#111827)]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardBody.displayName = "CardBody";

// Card Footer Component
const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "px-6 py-4 border-t",
          "bg-[var(--card-footer-bg,rgba(249,250,251,0.5))]",
          "border-[var(--card-footer-border,#e5e7eb)]",
          "text-[var(--card-text,#111827)]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

CardFooter.displayName = "CardFooter";

// Card Principal Component
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    children, 
    className, 
    variant = 'default',
    size = 'md',
    padding = 'none', // none pois cada seção tem seu próprio padding
    rounded = 'lg',
    constrainWidth = false, // Por padrão, não aplicar max-width
    ...props 
  }, ref) => {
    
    const variantClasses = {
      default: "bg-[var(--card-bg,#ffffff)] border border-[var(--card-border,#e5e7eb)] shadow-[var(--card-shadow-sm,0_1px_2px_0_rgb(0_0_0_/_0.05))]",
      outlined: "bg-[var(--card-bg,#ffffff)] border-2 border-[var(--primary,#2563eb)]",
      elevated: "bg-[var(--card-bg,#ffffff)] border border-[var(--card-border,#e5e7eb)] shadow-[var(--card-shadow-lg,0_10px_15px_-3px_rgb(0_0_0_/_0.1),_0_4px_6px_-4px_rgb(0_0_0_/_0.1))]",
      flat: "bg-[var(--card-bg,#ffffff)] border-0"
    };

    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md", 
      lg: "max-w-lg"
    };

    const paddingClasses = {
      none: "",
      sm: "p-3",
      md: "p-4", 
      lg: "p-6"
    };

    const roundedClasses = {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col", // Flex column para organizar header, body, footer
          variantClasses[variant],
          constrainWidth && sizeClasses[size], // Aplicar max-width apenas se constrainWidth for true
          paddingClasses[padding],
          roundedClasses[rounded],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

// Definir o tipo do Card composto corretamente
type CardComponent = typeof Card & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

// Criar o Card composto usando Object.assign e casting
const CompoundCard = Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
}) as CardComponent;

// Exportar componentes
export { CompoundCard as Card, CardHeader, CardBody, CardFooter };