/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchTimeline
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a chronological timeline of research
 * initiatives, milestones, projects, or institutional
 * development.
 *
 * Used In:
 * • Research Roadmap
 * • Annual Reports
 * • Strategic Plan
 * • Research Projects
 * • Institutional History
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  CalendarDays,
  ArrowDown,
} from "lucide-react";

type TimelineItem = {
  year: string;

  title: string;

  description: string;

  status?: string;
};

type ResearchTimelineProps = {
  items: TimelineItem[];

  className?: string;
};

export default function ResearchTimeline({
  items,

  className = "",
}: ResearchTimelineProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <div
          key={`${item.year}-${item.title}`}
          className="relative"
        >
          <Card>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <CalendarDays className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    {item.year}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
              </div>

              {item.status && (
                <Badge variant="primary">
                  {item.status}
                </Badge>
              )}
            </div>

            <p className="mt-6 leading-8 text-slate-600">
              {item.description}
            </p>
          </Card>

          {index < items.length - 1 && (
            <div className="flex justify-center py-4">
              <ArrowDown className="h-6 w-6 text-slate-300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}