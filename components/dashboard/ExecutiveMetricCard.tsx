import Card from "@/components/ui/Card";
import StatusBadge from "./StatusBadge";

type ExecutiveMetricCardProps = {
  value: string | number;
  title: string;
  category: string;
  status:
    | "Active"
    | "Growing"
    | "Building"
    | "Launching"
    | "Emerging"
    | "Developing"
    | "Expanding";
  description?: string;
  className?: string;
};

export default function ExecutiveMetricCard({
  value,
  title,
  category,
  status,
  description,
  className = "",
}: ExecutiveMetricCardProps) {
  return (
    <Card
      className={`
        group
        h-full
        overflow-hidden
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-emerald-300
        hover:shadow-2xl
        ${className}
      `}
    >
      {/* Category */}

      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        {category}
      </p>

      {/* Metric */}

      <div className="mt-8">
        <h2 className="text-6xl font-extrabold tracking-tight text-slate-900 transition-transform duration-300 group-hover:scale-105">
          {value}
        </h2>
      </div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Optional Description */}

      {description && (
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      )}

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
        <StatusBadge status={status} />

        <span className="text-sm font-medium text-slate-400">
          Dashboard Metric
        </span>
      </div>
    </Card>
  );
}