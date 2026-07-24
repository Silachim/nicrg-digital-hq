import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ExecutiveMetricCard from "./ExecutiveMetricCard";
import PerformanceIndicator from "./PerformanceIndicator";
import StrategicOutlook from "./StrategicOutlook";
import DashboardFooter from "./DashboardFooter";

type Status =
  | "Active"
  | "Growing"
  | "Building"
  | "Launching"
  | "Emerging"
  | "Developing"
  | "Expanding";

type Metric = {
  value: string | number;
  title: string;
  category: string;
  status: Status;
  description?: string;
};

type Indicator = {
  title: string;
  value: number;
  status: Status;
  color?: "emerald" | "blue" | "purple" | "amber" | "rose";
  description?: string;
};

type ExecutiveDashboardProps = {
  badge: string;
  title: string;
  description: string;

  metrics: Metric[];

  indicators: Indicator[];

  outlook: {
    phase: string;
    priority: string;
    milestone: string;
    vision: string;
  };

  footer: {
    lastUpdated: string;
    reportingCycle: string;
    framework: string;
    dataSource?: string;
    version?: string;
  };
};

export default function ExecutiveDashboard({
  badge,
  title,
  description,
  metrics,
  indicators,
  outlook,
  footer,
}: ExecutiveDashboardProps) {
  return (
    <Section background="white">

      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      {/* Executive Metrics */}

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {metrics.map((metric) => (

          <ExecutiveMetricCard
            key={metric.title}
            value={metric.value}
            title={metric.title}
            category={metric.category}
            status={metric.status}
            description={metric.description}
          />

        ))}

      </div>

      {/* Performance Indicators */}

      <div className="mt-20">

        <h2 className="mb-8 text-3xl font-bold text-slate-900">
          Institutional Performance Snapshot
        </h2>

        <div className="grid gap-6 lg:grid-cols-2">

          {indicators.map((indicator) => (

            <PerformanceIndicator
              key={indicator.title}
              title={indicator.title}
              value={indicator.value}
              status={indicator.status}
              color={indicator.color}
              description={indicator.description}
            />

          ))}

        </div>

      </div>

      {/* Strategic Outlook */}

      <div className="mt-20">

        <StrategicOutlook
          phase={outlook.phase}
          priority={outlook.priority}
          milestone={outlook.milestone}
          vision={outlook.vision}
        />

      </div>

      {/* Footer */}

      <DashboardFooter
        lastUpdated={footer.lastUpdated}
        reportingCycle={footer.reportingCycle}
        framework={footer.framework}
        dataSource={footer.dataSource}
        version={footer.version}
      />

    </Section>
  );
}