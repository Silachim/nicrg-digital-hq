/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationMetrics
 * Version: 2.0.0
 *
 * Purpose:
 * Displays publication metrics,
 * repository performance, scholarly
 * visibility, and research indicators.
 *
 * Used In:
 * • Publications Page
 * • Publication Repository
 * • Research Dashboard
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

type Metric = {
  label: string;

  value: string | number;
};

type PublicationMetricsProps = {
  metrics: Metric[];

  title?: string;

  description?: string;

  className?: string;
};

export default function PublicationMetrics({
  metrics,
  title,
  description,
  className = "",
}: PublicationMetricsProps) {
  return (
    <Card className={className}>
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h3 className="text-2xl font-bold text-slate-900">
              {title}
            </h3>
          )}

          {description && (
            <p className="mt-3 leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={`${metric.label}-${index}`}
            className="text-center"
          >
            <p className="text-3xl font-bold text-emerald-700">
              {metric.value}
            </p>

            <p className="mt-2 text-sm font-medium text-slate-600">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}