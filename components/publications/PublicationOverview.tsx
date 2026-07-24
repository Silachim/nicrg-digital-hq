/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationsOverview
 * Version: 2.0.0
 *
 * Purpose:
 * Provides an overview of NICRG's
 * publication ecosystem together with
 * key institutional publication statistics.
 *
 * Used In:
 * • Publications Page
 * • Knowledge Repository
 * • Institutional Dashboard
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

type PublicationsOverviewProps = {
  badge: string;

  title: string;

  description: string;

  statistics: Statistic[];

  className?: string;
};

export default function PublicationsOverview({
  badge,
  title,
  description,
  statistics,
  className = "",
}: PublicationsOverviewProps) {
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