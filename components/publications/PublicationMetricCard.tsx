/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationMetricCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a publication metric including
 * citation counts, downloads, research
 * outputs, impact indicators, and other
 * scholarly statistics.
 *
 * Used In:
 * • PublicationMetrics
 * • Publications Dashboard
 * • Annual Reports
 * • Research Impact
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";

import {
  BarChart3,
} from "lucide-react";

type PublicationMetricCardProps = {
  value: string | number;

  label: string;

  description?: string;

  icon?: ReactNode;

  className?: string;
};

export default function PublicationMetricCard({
  value,
  label,
  description,
  icon,
  className = "",
}: PublicationMetricCardProps) {
  return (
    <Card
      className={`flex h-full flex-col text-center ${className}`}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        {icon ?? (
          <BarChart3 className="h-8 w-8" />
        )}
      </div>

      <div className="mt-6 text-5xl font-extrabold text-emerald-700">
        {value}
      </div>

      <h3 className="mt-4 text-xl font-bold text-slate-900">
        {label}
      </h3>

      {description && (
        <p className="mt-5 flex-1 leading-7 text-slate-600">
          {description}
        </p>
      )}
    </Card>
  );
}