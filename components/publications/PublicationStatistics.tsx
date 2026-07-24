/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationStatistics
 * Version: 2.1.0
 *
 * Purpose:
 * Displays institutional publication
 * statistics using the reusable
 * StatisticStrip component.
 *
 * Used In:
 * • Publications
 * • Annual Reports
 * • Research Dashboard
 * • Institutional Impact
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import StatisticStrip from "@/components/ui/StatisticStrip";

type Statistic = {
  value: string;

  label: string;
};

type PublicationStatisticsProps = {
  badge: string;

  title: string;

  description: string;

  statistics: Statistic[];

  className?: string;
};

export default function PublicationStatistics({
  badge,
  title,
  description,
  statistics,
  className = "",
}: PublicationStatisticsProps) {
  return (
    <Section
      background="white"
      className={className}
    >
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16">
        <StatisticStrip
          stats={statistics}
        />
      </div>
    </Section>
  );
}