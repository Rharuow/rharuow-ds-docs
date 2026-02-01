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
  variant?: 'default' | 'outlined' | 'elevated' | 'flat' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  constrainWidth?: boolean; // Nova prop para controlar se deve aplicar max-width
  allowOverflow?: boolean; // Nova prop para permitir overflow quando necessário (ex: tooltips legados)
}

// Card Header Component
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-4 border-b",
          "bg-[var(--card-header-bg)]",
          "border-[var(--card-header-border)]",
          "text-[var(--text-primary)]",
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
          "px-2 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-4",
          "flex-1", // Para ocupar o espaço disponível
          "bg-[var(--card-body-bg)]",
          "text-[var(--text-primary)]",
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
          "bg-[var(--card-footer-bg)]",
          "border-[var(--card-footer-border)]",
          "text-[var(--text-primary)]",
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
    allowOverflow = false, // Por padrão, aplicar overflow hidden para interface limpa
    ...props 
  }, ref) => {
    
    const variantClasses = {
      default: "bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow-sm)]",
      outlined: "bg-[var(--card-bg)] border-2 border-[var(--primary)]",
      elevated: "bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[var(--card-shadow-lg)]",
      flat: "bg-[var(--card-bg)] border-0",
      primary: "bg-[var(--primary-light)] border-2 border-[var(--primary)] shadow-[var(--card-shadow-sm)]",
      secondary: "bg-[var(--secondary-light)] border-2 border-[var(--secondary)] shadow-[var(--card-shadow-sm)]"
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
          !allowOverflow && "overflow-hidden", // Overflow hidden por padrão para bordas limpas
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