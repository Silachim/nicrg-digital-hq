/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Component: DashboardPanel
 * Version: 1.0.0
 *
 * Purpose:
 * Standard executive dashboard section container.
 *
 * Used In:
 * • Research Dashboard
 * • Governance Dashboard
 * • Membership Dashboard
 * • Finance Dashboard
 * • Executive Intelligence
 * • Publications Dashboard
 * • Admin Portal
 *
 * Features
 * • Standardized spacing
 * • Optional badge
 * • Optional title
 * • Optional description
 * • Optional action area
 * • Standard content region
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "./Card";
import Badge from "./Badge";

type DashboardPanelProps = {
  title?: ReactNode;

  description?: ReactNode;

  badge?: string;

  badgeVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "neutral"
    | "outline"
    | "research"
    | "executive";

  action?: ReactNode;

  footer?: ReactNode;

  children: ReactNode;

  className?: string;
};

export default function DashboardPanel({
  title,

  description,

  badge,

  badgeVariant = "executive",

  action,

  footer,

  children,

  className = "",
}: DashboardPanelProps) {
  return (
    <Card
      variant="dashboard"
      className={className}
    >
      {(badge ||
        title ||
        description ||
        action) && (
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            {badge && (
              <Badge variant={badgeVariant}>
                {badge}
              </Badge>
            )}

            {title && (
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {title}
              </h3>
            )}

            {description && (
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                {description}
              </p>
            )}
          </div>

          {action && (
            <div className="flex shrink-0 items-start">
              {action}
            </div>
          )}
        </div>
      )}

      <div>
        {children}
      </div>

      {footer && (
        <div className="mt-8 border-t border-slate-200 pt-6">
          {footer}
        </div>
      )}
    </Card>
  );
}