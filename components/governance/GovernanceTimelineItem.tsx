/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceTimelineItem
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a single governance milestone,
 * institutional achievement,
 * strategic objective,
 * or governance event.
 *
 * Used In:
 * • Governance Timeline
 * • Institutional History
 * • Annual Reports
 * • Strategic Plans
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

type GovernanceTimelineItemProps = {
  year: string;

  title: string;

  description: string;

  status?: string;

  isLast?: boolean;
};

export default function GovernanceTimelineItem({
  year,
  title,
  description,
  status,
  isLast = false,
}: GovernanceTimelineItemProps) {
  return (
    <div className="relative">
      <Card>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <CalendarDays className="h-8 w-8" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {year}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {title}
              </h3>
            </div>
          </div>

          {status && (
            <Badge variant="primary">
              {status}
            </Badge>
          )}
        </div>

        <p className="mt-6 leading-8 text-slate-600">
          {description}
        </p>
      </Card>

      {!isLast && (
        <div className="flex justify-center py-6">
          <ArrowDown className="h-6 w-6 text-slate-300" />
        </div>
      )}
    </div>
  );
}