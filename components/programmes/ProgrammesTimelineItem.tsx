/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesTimelineItem
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a single programme milestone.
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { CalendarDays } from "lucide-react";

type ProgrammesTimelineItemProps = {
  year: string;

  title: string;

  description: string;

  status?: string;
};

export default function ProgrammesTimelineItem({
  year,
  title,
  description,
  status,
}: ProgrammesTimelineItemProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <CalendarDays className="h-7 w-7" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {year}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
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
  );
}