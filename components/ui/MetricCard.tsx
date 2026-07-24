import { ReactNode } from "react";
import Card from "./Card";
import Badge from "./Badge";

type Trend = "up" | "down" | "neutral";

type MetricCardProps = {
  value: string | number;

  label: string;

  description?: string;

  icon?: ReactNode;

  badge?: string;

  trend?: Trend;

  trendValue?: string;

  footer?: ReactNode;

  align?: "left" | "center";

  className?: string;
};

export default function MetricCard({
  value,

  label,

  description,

  icon,

  badge,

  trend,

  trendValue,

  footer,

  align = "center",

  className = "",
}: MetricCardProps) {
  const alignment =
    align === "center"
      ? "text-center"
      : "text-left";

  const trendColors = {
    up: "text-emerald-600",

    down: "text-red-600",

    neutral: "text-slate-500",
  };

  return (
    <Card
      variant="metric"
      className={alignment + " " + className}
    >
      {badge && (
        <div className="mb-5">
          <Badge variant="outline">
            {badge}
          </Badge>
        </div>
      )}

      {icon && (
        <div
          className={
            align === "center"
              ? "mb-6 flex justify-center"
              : "mb-6"
          }
        >
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

      {trend && trendValue && (
        <p
          className={`mt-4 text-sm font-semibold ${trendColors[trend]}`}
        >
          {trend === "up" && "▲ "}
          {trend === "down" && "▼ "}
          {trend === "neutral" && "● "}
          {trendValue}
        </p>
      )}

      {footer && (
        <div className="mt-6 border-t border-slate-100 pt-4">
          {footer}
        </div>
      )}
    </Card>
  );
}