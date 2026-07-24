/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesTimeline
 * Version: 1.0.0
 *
 * Purpose:
 * Displays programme milestones
 * chronologically.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ProgrammesTimelineItem from "./ProgrammesTimelineItem";

import { ArrowDown } from "lucide-react";

type TimelineItem = {
  year: string;

  title: string;

  description: string;

  status?: string;
};

type ProgrammesTimelineProps = {
  badge: string;

  title: string;

  description: string;

  items: TimelineItem[];
};

export default function ProgrammesTimeline({
  badge,
  title,
  description,
  items,
}: ProgrammesTimelineProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 space-y-8">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="relative"
          >
            <ProgrammesTimelineItem
              year={item.year}
              title={item.title}
              description={item.description}
              status={item.status}
            />

            {index < items.length - 1 && (
              <div className="flex justify-center py-4">
                <ArrowDown className="h-6 w-6 text-slate-300" />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}