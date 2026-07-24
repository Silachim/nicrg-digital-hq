/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceMetricCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a governance KPI, institutional
 * statistic, or organizational metric.
 *
 * Used In:
 * • Governance Dashboard
 * • Annual Reports
 * • Institutional Profile
 * • Executive Overview
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  TrendingUp,
} from "lucide-react";

type GovernanceMetricCardProps = {
  label: string;

  value: string | number;

  description?: string;

  icon?: ReactNode;

  badge?: string;

  trend?: "up" | "down" | "neutral";

  className?: string;
};

export default function GovernanceMetricCard({
  label,
  value,
  description,
  icon,
  badge,
  trend = "neutral",
  className = "",
}: GovernanceMetricCardProps) {
  const trendColor = {
    up: "text-emerald-600",

    down: "text-red-600",

    neutral: "text-slate-500",
  };

  return (
    <Card
      variant="metric"
      className={`h-full ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon ?? (
            <TrendingUp className="h-8 w-8" />
          )}
        </div>

        {badge && (
          <Badge variant="primary">
            {badge}
          </Badge>
        )}
      </div>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>

      <h3 className="mt-3 text-5xl font-extrabold text-slate-900">
        {value}
      </h3>

      {description && (
        <p
          className={`mt-5 leading-7 ${trendColor[trend]}`}
        >
          {description}
        </p>
      )}
    </Card>
  );
}