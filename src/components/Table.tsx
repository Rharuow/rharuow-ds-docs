import React from "react";
import { cn } from "../lib/utils";

// Interface base para componentes da Table
interface BaseTableProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

// Table Props principais
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'striped' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
  stickyHeader?: boolean;
}

// TableHeader Props
export interface TableHeaderProps extends BaseTableProps {
  as?: 'thead';
}

// TableBody Props  
export interface TableBodyProps extends BaseTableProps {
  as?: 'tbody';
}

// TableFooter Props
export interface TableFooterProps extends BaseTableProps {
  as?: 'tfoot';
}

// TableRow Props
export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'selected' | 'hover';
}

// TableCell Props
export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'td' | 'th';
  align?: 'left' | 'center' | 'right';
  scope?: 'col' | 'row';
  colSpan?: number;
  rowSpan?: number;
}

// Componente Table principal
const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      responsive = false,
      stickyHeader = false,
      ...props
    },
    ref
  ) => {
    const tableClasses = cn(
      // Base styles
      "w-full border-collapse bg-[var(--table-bg)] text-[var(--table-text)]",
      
      // Variant styles
      {
        "border border-[var(--table-border)]": variant === "bordered",
      },
      
      // Size styles
      {
        "text-sm": size === "sm",
        "text-base": size === "md", 
        "text-lg": size === "lg",
      },
      
      className
    );

    const wrapperClasses = cn(
      {
        "overflow-x-auto": responsive,
        "max-h-96 overflow-y-auto": stickyHeader,
      }
    );

    const table = (
      <table
        ref={ref}
        className={tableClasses}
        {...props}
      >
        {children}
      </table>
    );

    if (responsive || stickyHeader) {
      return (
        <div className={wrapperClasses}>
          {table}
        </div>
      );
    }

    return table;
  }
);

// Componente TableHeader
const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ children, className, as: Component = "thead", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "border-b border-[var(--table-border)] bg-[var(--table-header-bg)]",
          {
            "sticky top-0 z-10": Component === "thead",
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

// Componente TableBody
const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, as: Component = "tbody", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "[&_tr:nth-child(odd)]:bg-[var(--table-row-odd)]",
          "[&_tr:nth-child(even)]:bg-[var(--table-row-even)]",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

// Componente TableFooter
const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, className, as: Component = "tfoot", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "border-t border-[var(--table-border)] bg-[var(--table-header-bg)] font-medium",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

// Componente TableRow
const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn(
          "border-b border-[var(--table-border)] transition-colors",
          {
            "hover:bg-[var(--table-row-hover)]": variant === "hover",
            "bg-[var(--table-row-selected)]": variant === "selected",
          },
          className
        )}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

// Componente TableCell
const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (
    {
      children,
      className,
      as: Component = "td",
      align = "left",
      scope,
      colSpan,
      rowSpan,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        scope={Component === "th" ? scope : undefined}
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={cn(
          "px-4 py-3 text-left",
          {
            "font-semibold": Component === "th",
            "text-sm": Component === "td",
            "text-center": align === "center",
            "text-right": align === "right",
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

// Definir displayName para debugging
Table.displayName = "Table";
TableHeader.displayName = "TableHeader";
TableBody.displayName = "TableBody";
TableFooter.displayName = "TableFooter";
TableRow.displayName = "TableRow";
TableCell.displayName = "TableCell";

// Definir o tipo do Table composto corretamente
type TableComponent = typeof Table & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

// Criar o Table composto usando Object.assign e casting
const CompoundTable = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Cell: TableCell,
}) as TableComponent;

// Exportar componentes
export { 
  CompoundTable as Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableRow, 
  TableCell 
};