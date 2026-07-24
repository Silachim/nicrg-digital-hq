/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Common Component
 * Component: Breadcrumb
 * Version: 1.0.0
 *
 * Purpose:
 * Displays the current page location
 * within the NICRG Digital Headquarters
 * and improves navigation between pages.
 *
 * Used In:
 * • Research
 * • Publications
 * • Programmes
 * • Membership
 * • Governance
 * • News
 * • Contact
 *
 * --------------------------------------------------------
 */

import Link from "next/link";

import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];

  className?: string;
};

export default function Breadcrumb({
  items,
  className = "",
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`
        border-b
        border-slate-200
        bg-slate-50
        ${className}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-4">

        <ol className="flex flex-wrap items-center gap-2 text-sm">

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="
                      font-medium
                      text-slate-600
                      transition
                      hover:text-emerald-700
                    "
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className="
                      font-semibold
                      text-slate-900
                    "
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <ChevronRight
                    size={16}
                    className="text-slate-400"
                  />
                )}
              </li>
            );
          })}

        </ol>

      </div>
    </nav>
  );
}