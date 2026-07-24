/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesStatistics
 * Version: 1.0.0
 *
 * Purpose:
 * Displays institutional programme metrics.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ProgrammesMetricCard from "./ProgrammesMetricCard";

type Metric = {
  value: string | number;

  label: string;

  description?: string;
};

type ProgrammesStatisticsProps = {
  badge: string;

  title: string;

  description: string;

  metrics: Metric[];
};

export default function ProgrammesStatistics({
  badge,
  title,
  description,
  metrics,
}: ProgrammesStatisticsProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <ProgrammesMetricCard
            key={`${metric.label}-${index}`}
            value={metric.value}
            label={metric.label}
            description={metric.description}
          />
        ))}
      </div>
    </Section>
  );
}