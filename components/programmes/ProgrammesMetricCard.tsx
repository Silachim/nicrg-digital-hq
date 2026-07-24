/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesMetricCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a programme KPI or impact metric.
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

type ProgrammesMetricCardProps = {
  value: string | number;

  label: string;

  description?: string;

  className?: string;
};

export default function ProgrammesMetricCard({
  value,
  label,
  description,
  className = "",
}: ProgrammesMetricCardProps) {
  return (
    <Card className={`text-center h-full ${className}`}>
      <p className="text-5xl font-extrabold text-emerald-700">
        {value}
      </p>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {label}
      </h3>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      )}
    </Card>
  );
}