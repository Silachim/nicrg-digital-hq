/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceTimeline
 * Version: 2.0.0
 *
 * Purpose:
 * Displays institutional governance
 * milestones and strategic evolution
 * using reusable timeline items.
 *
 * Used In:
 * • Governance
 * • Institutional History
 * • Strategic Roadmap
 * • Annual Reports
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GovernanceTimelineItem from "./GovernanceTimelineItem";

type TimelineItem = {
  year: string;

  title: string;

  description: string;

  status?: string;
};

type GovernanceTimelineProps = {
  badge: string;

  title: string;

  description: string;

  items: TimelineItem[];
};

export default function GovernanceTimeline({
  badge,
  title,
  description,
  items,
}: GovernanceTimelineProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mx-auto mt-16 max-w-5xl">
        {items.map((item, index) => (
          <GovernanceTimelineItem
            key={`${item.year}-${item.title}`}
            year={item.year}
            title={item.title}
            description={item.description}
            status={item.status}
            isLast={
              index === items.length - 1
            }
          />
        ))}
      </div>
    </Section>
  );
}