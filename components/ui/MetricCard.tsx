import { ReactNode } from "react";
import Card from "./Card";

type MetricCardProps = {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
};

export default function MetricCard({
  value,
  label,
  description,
  icon,
}: MetricCardProps) {
  return (
    <Card className="text-center">
      {icon && (
        <div className="mb-6 flex justify-center">
          {icon}
        </div>
      )}

      <h3 className="text-5xl font-extrabold text-emerald-700">
        {value}
      </h3>

      <p className="mt-3 text-lg font-semibold text-slate-900">
        {label}
      </p>

      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {description}
        </p>
      )}
    </Card>
  );
}