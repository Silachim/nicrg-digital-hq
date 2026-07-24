/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Component: DashboardHeader
 * Version: 1.0.0
 *
 * Purpose:
 * Standard header for executive dashboards.
 *
 * Used In:
 * • Research Dashboard
 * • Governance Dashboard
 * • Membership Dashboard
 * • Executive Intelligence
 * • Finance Dashboard
 * • Publications Dashboard
 * • Admin Portal
 *
 * Features
 * • Badge
 * • Title
 * • Description
 * • Action Area
 * • Metadata Row
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Badge from "./Badge";

type DashboardHeaderProps = {
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

  title: ReactNode;

  description?: ReactNode;

  action?: ReactNode;

  metadata?: ReactNode;

  className?: string;
};

export default function DashboardHeader({
  badge,

  badgeVariant = "executive",

  title,

  description,

  action,

  metadata,

  className = "",
}: DashboardHeaderProps) {
  return (
    <div
      className={[
        "mb-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between",
        className,
      ].join(" ")}
    >
      <div className="flex-1 max-w-4xl">
        {badge && (
          <Badge variant={badgeVariant}>
            {badge}
          </Badge>
        )}

        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {description}
          </p>
        )}

        {metadata && (
          <div className="mt-6">
            {metadata}
          </div>
        )}
      </div>

      {action && (
        <div className="flex shrink-0 items-start">
          {action}
        </div>
      )}
    </div>
  );
}