import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import PublicationStatistics from "./PublicationStatistics";

type Statistic = {
  value: string;
  label: string;
};

type PublicationsImpactProps = {
  badge: string;
  title: string;
  description: string;
  statistics: Statistic[];
};

export default function PublicationsImpact({
  badge,
  title,
  description,
  statistics,
}: PublicationsImpactProps) {
  return (
    <Section background="blue">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16">
        <PublicationStatistics
          statistics={statistics}
        />
      </div>
    </Section>
  );
}