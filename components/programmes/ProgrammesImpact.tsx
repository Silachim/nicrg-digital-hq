/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesImpact
 * Version: 1.0.0
 *
 * Purpose:
 * Highlights the institutional impact
 * of NICRG programmes.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ProgrammesImpactCard from "./ProgrammesImpactCard";

type Impact = {
  title: string;

  description: string;

  outcome?: string;
};

type ProgrammesImpactProps = {
  badge: string;

  title: string;

  description: string;

  impacts: Impact[];
};

export default function ProgrammesImpact({
  badge,
  title,
  description,
  impacts,
}: ProgrammesImpactProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {impacts.map((impact, index) => (
          <ProgrammesImpactCard
            key={`${impact.title}-${index}`}
            title={impact.title}
            description={impact.description}
            outcome={impact.outcome}
          />
        ))}
      </div>
    </Section>
  );
}