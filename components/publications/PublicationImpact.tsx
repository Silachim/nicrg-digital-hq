/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationImpact
 * Version: 2.1.0
 *
 * Purpose:
 * Highlights the institutional impact
 * of NICRG publications through
 * reusable impact statistics.
 *
 * Used In:
 * • Publications
 * • Annual Reports
 * • Research Impact
 * • Institutional Dashboard
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import StatisticStrip from "@/components/ui/StatisticStrip";

type ImpactStatistic = {
  value: string;

  label: string;
};

type PublicationImpactProps = {
  badge: string;

  title: string;

  description: string;

  statistics: ImpactStatistic[];

  className?: string;
};

export default function PublicationImpact({
  badge,
  title,
  description,
  statistics,
  className = "",
}: PublicationImpactProps) {
  return (
    <Section
      background="emerald"
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