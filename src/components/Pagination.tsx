"use client";
import React from "react";
import { cn } from "../lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface PaginationProps {
  /** Total number of pages */
  totalPages: number;
  /** Currently active page (1-based) */
  currentPage: number;
  /** Callback when the user selects a page */
  onPageChange: (page: number) => void;
  /** Disable all interaction */
  disabled?: boolean;
  /** Extra class on the root nav element */
  className?: string;
}

// ─── Page item builder ───────────────────────────────────────────────────────

type PageItem = number | "...";

function buildPageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 0) return [];

  // Window of 3 consecutive pages centred on currentPage
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, start + 2);
  start = Math.max(1, end - 2); // re-adjust if end hit the upper boundary

  const items: PageItem[] = [];
  for (let i = start; i <= end; i++) items.push(i);

  // Append ellipsis + last page when the window doesn't reach totalPages
  if (end < totalPages) {
    if (totalPages - end > 1) items.push("...");
    items.push(totalPages);
  }

  return items;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

interface PageButtonProps {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  "aria-label": string;
  children: React.ReactNode;
}

const PageButton: React.FC<PageButtonProps> = ({
  active = false,
  disabled = false,
  onClick,
  children,
  ...rest
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "min-w-[2rem] h-8 px-2 rounded font-medium text-sm transition-all duration-150",
      "flex items-center justify-center select-none",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-1",
      active
        ? "bg-[var(--primary)] text-[var(--pagination-active-text)] border border-[var(--primary)]"
        : "bg-[var(--pagination-item-bg)] text-[var(--pagination-item-text)] border border-[var(--pagination-item-border)] hover:bg-[var(--pagination-item-hover-bg)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
      disabled && "opacity-40 cursor-not-allowed pointer-events-none"
    )}
    {...rest}
  >
    {children}
  </button>
);

// Arrow icons as inline SVG to keep the component self-contained
const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={16}
    height={16}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={16}
    height={16}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

// ─── Main component ───────────────────────────────────────────────────────────

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  disabled = false,
  className = "",
}) => {
  if (totalPages <= 0) return null;

  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;
  const pageItems = buildPageItems(currentPage, totalPages);

  return (
    <nav
      role="navigation"
      aria-label="Paginação"
      className={cn("flex items-center gap-1", className)}
    >
      {/* Previous page arrow — hidden on first page */}
      {!isFirst && (
        <PageButton
          aria-label="Página anterior"
          disabled={disabled}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft />
        </PageButton>
      )}

      {/* Page items */}
      {pageItems.map((item, idx) =>
        item === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="min-w-[2rem] h-8 flex items-center justify-center text-sm text-[var(--pagination-item-text)] select-none"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          <PageButton
            key={item}
            active={item === currentPage}
            disabled={disabled}
            aria-label={
              item === currentPage
                ? `Página atual, página ${item}`
                : `Ir para página ${item}`
            }
            aria-current={item === currentPage ? "page" : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </PageButton>
        )
      )}

      {/* Next page arrow — hidden on last page */}
      {!isLast && (
        <PageButton
          aria-label="Próxima página"
          disabled={disabled}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight />
        </PageButton>
      )}
    </nav>
  );
};
