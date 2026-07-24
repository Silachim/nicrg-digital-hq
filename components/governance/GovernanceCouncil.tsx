/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceCouncil
 * Version: 2.0.0
 *
 * Purpose:
 * Presents NICRG's Governing Council,
 * Board of Trustees, Executive Council,
 * or Advisory Council.
 *
 * Used In:
 * • Governance
 * • Institutional Profile
 * • Annual Reports
 * • Leadership Directory
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GovernanceCouncilCard from "./GovernanceCouncilCard";

import { UserRound } from "lucide-react";

type CouncilMember = {
  name: string;

  position: string;

  department?: string;

  biography: string;

  status?:
    | "Chair"
    | "Vice Chair"
    | "Member"
    | "Executive"
    | "Advisor";

  image?: React.ReactNode;

  href?: string;

  buttonLabel?: string;
};

type GovernanceCouncilProps = {
  badge: string;

  title: string;

  description: string;

  members: CouncilMember[];
};

export default function GovernanceCouncil({
  badge,
  title,
  description,
  members,
}: GovernanceCouncilProps) {
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
        {members.map((member) => (
          <GovernanceCouncilCard
            key={member.name}
            name={member.name}
            position={member.position}
            department={member.department}
            biography={member.biography}
            status={member.status}
            image={
              member.image ?? (
                <UserRound className="h-10 w-10" />
              )
            }
            href={member.href}
            buttonLabel={
              member.buttonLabel ??
              "View Profile"
            }
          />
        ))}
      </div>
    </Section>
  );
}