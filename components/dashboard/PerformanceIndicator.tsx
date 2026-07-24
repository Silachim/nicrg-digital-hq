import ProgressBar from "./ProgressBar";
import StatusBadge from "./StatusBadge";

type Status =
  | "Active"
  | "Growing"
  | "Building"
  | "Launching"
  | "Emerging"
  | "Developing"
  | "Expanding";

type Color =
  | "emerald"
  | "blue"
  | "purple"
  | "amber"
  | "rose";

type PerformanceIndicatorProps = {
  title: string;
  value: number;
  status: Status;
  color?: Color;
  description?: string;
  className?: string;
};

export default function PerformanceIndicator({
  title,
  value,
  status,
  color = "emerald",
  description,
  className = "",
}: PerformanceIndicatorProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:border-emerald-200
        hover:shadow-lg
        ${className}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          {description && (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {description}
            </p>
          )}
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="mt-6">
        <ProgressBar
          value={value}
          color={color}
        />
      </div>
    </div>
  );
}