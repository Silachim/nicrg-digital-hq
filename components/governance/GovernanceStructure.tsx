/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceStructure
 * Version: 3.0.0
 *
 * Purpose:
 * Presents NICRG's institutional governance
 * hierarchy and reporting structure.
 *
 * Used In:
 * • Governance
 * • Institutional Profile
 * • Annual Reports
 * • Strategic Plan
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GovernanceStructureCard from "./GovernanceStructureCard";

type StructureItem = {
  title: string;

  description: string;

  reportsTo?: string;

  members?: number;

  icon?: ReactNode;

  href?: string;
};

type GovernanceStructureProps = {
  badge: string;

  title: string;

  description: string;

  structures: StructureItem[];
};

export default function GovernanceStructure({
  badge,
  title,
  description,
  structures,
}: GovernanceStructureProps) {
  return (
    <Section
      background="slate"
      className="scroll-mt-28"
    >
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {structures.map((structure, index) => (
          <GovernanceStructureCard
            key={`${structure.title}-${index}`}
            title={structure.title}
            description={structure.description}
            reportsTo={structure.reportsTo}
            members={structure.members}
            icon={structure.icon}
            href={structure.href}
          />
        ))}
      </div>
    </Section>
  );
}