/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceCommittee
 * Version: 3.0.0
 *
 * Purpose:
 * Presents NICRG's standing committees,
 * highlighting their mandates and
 * governance responsibilities.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GovernanceCommitteeCard from "./GovernanceCommitteeCard";

import {
  ShieldCheck,
  GraduationCap,
  Scale,
  Briefcase,
  Landmark,
  Globe,
} from "lucide-react";

type Committee = {
  committee: string;

  mandate: string;

  chair?: string;

  members?: number;

  status?: string;

  href?: string;

  icon?:
    | "governance"
    | "research"
    | "ethics"
    | "finance"
    | "partnerships"
    | "international";
};

type GovernanceCommitteeProps = {
  badge: string;

  title: string;

  description: string;

  committees: Committee[];
};

const committeeIcons = {
  governance: <ShieldCheck className="h-8 w-8" />,
  research: <GraduationCap className="h-8 w-8" />,
  ethics: <Scale className="h-8 w-8" />,
  finance: <Briefcase className="h-8 w-8" />,
  partnerships: <Landmark className="h-8 w-8" />,
  international: <Globe className="h-8 w-8" />,
};

export default function GovernanceCommittee({
  badge,
  title,
  description,
  committees,
}: GovernanceCommitteeProps) {
  return (
    <Section
      background="white"
      className="scroll-mt-28"
    >
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {committees.map((committee, index) => (
          <GovernanceCommitteeCard
            key={`${committee.committee}-${index}`}
            committee={committee.committee}
            mandate={committee.mandate}
            chair={committee.chair}
            members={committee.members}
            status={committee.status}
            href={committee.href}
            icon={
              committee.icon
                ? committeeIcons[committee.icon]
                : undefined
            }
          />
        ))}
      </div>
    </Section>
  );
}