/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Component: ExecutiveSummaryCard
 * Version: 1.0.0
 *
 * Purpose:
 * Executive summary card for institutional dashboards.
 *
 * Used In:
 * • Research Dashboard
 * • Governance Dashboard
 * • Membership Dashboard
 * • Executive Intelligence
 * • Finance Dashboard
 * • Publications Dashboard
 * • Annual Reports
 *
 * Features
 * • Badge
 * • Status Badge
 * • Progress Bar
 * • Optional Description
 * • Optional Action
 * • Optional Footer
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "./Card";
import Badge from "./Badge";
import StatusBadge from "./StatusBadge";
import ProgressBar from "./ProgressBar";

type ExecutiveStatus =
  | "Active"
  | "Building"
  | "Launching"
  | "Growing"
  | "Emerging"
  | "Expanding"
  | "Planning"
  | "Completed"
  | "Paused"
  | "Archived";

type ExecutiveSummaryCardProps = {
  badge?: string;

  badgeVariant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "neutral";

  title: string;

  description?: string;

  status: ExecutiveStatus;

  progress: number;

  action?: ReactNode;

  footer?: ReactNode;

  className?: string;
};

export default function ExecutiveSummaryCard({
  badge,

  badgeVariant = "primary",

  title,

  description,

  status,

  progress,

  action,

  footer,

  className = "",
}: ExecutiveSummaryCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      {badge && (
        <Badge variant={badgeVariant}>
          {badge}
        </Badge>
      )}

      <div className="mt-6 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <StatusBadge status={status} />
      </div>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8">
        <ProgressBar value={progress} />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          Institutional Progress
        </span>

        <span className="text-lg font-bold text-emerald-700">
          {progress}%
        </span>
      </div>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}

      {footer && (
        <div className="mt-auto border-t border-slate-200 pt-6 text-sm text-slate-500">
          {footer}
        </div>
      )}
    </Card>
  );
}