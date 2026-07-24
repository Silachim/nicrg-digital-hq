/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceLeadership
 * Version: 2.0.0
 *
 * Purpose:
 * Presents NICRG's Executive Leadership,
 * Secretariat, and senior institutional
 * officers.
 *
 * Used In:
 * • Governance
 * • Leadership Directory
 * • Institutional Profile
 * • Annual Reports
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GovernanceLeadershipCard from "./GovernanceLeadershipCard";

import { UserRound } from "lucide-react";

type LeadershipStatus =
  | "President"
  | "Vice President"
  | "Executive Secretary"
  | "Treasurer"
  | "Director"
  | "Officer";

type Leader = {
  name: string;

  title: string;

  department?: string;

  biography: string;

  status?: LeadershipStatus;

  image?: ReactNode;

  href?: string;

  buttonLabel?: string;
};

type GovernanceLeadershipProps = {
  badge: string;

  title: string;

  description: string;

  leaders: Leader[];
};

export default function GovernanceLeadership({
  badge,
  title,
  description,
  leaders,
}: GovernanceLeadershipProps) {
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
        {leaders.map((leader) => (
          <GovernanceLeadershipCard
            key={leader.name}
            name={leader.name}
            title={leader.title}
            department={leader.department}
            biography={leader.biography}
            status={leader.status}
            image={
              leader.image ?? (
                <UserRound className="h-10 w-10" />
              )
            }
            href={leader.href}
            buttonLabel={
              leader.buttonLabel ??
              "View Profile"
            }
          />
        ))}
      </div>
    </Section>
  );
}