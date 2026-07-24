/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchCallout
 * Version: 1.0.0
 *
 * Purpose:
 * Highlights important research announcements,
 * strategic insights, recommendations, or
 * evidence-based messages.
 *
 * Used In:
 * • Research Overview
 * • Research Cluster Pages
 * • Annual Reports
 * • Strategic Plan
 * • Policy Briefs
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  Lightbulb,
} from "lucide-react";

type ResearchCalloutProps = {
  title: string;

  description: string;

  badge?: string;

  icon?: ReactNode;

  className?: string;
};

export default function ResearchCallout({
  title,

  description,

  badge,

  icon,

  className = "",
}: ResearchCalloutProps) {
  return (
    <Card
      className={`relative overflow-hidden border-l-4 border-l-emerald-600 ${className}`}
    >
      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon ?? <Lightbulb className="h-8 w-8" />}
        </div>

        <div className="flex-1">
          {badge && (
            <Badge variant="primary">
              {badge}
            </Badge>
          )}

          <h3 className="mt-4 text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}