/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchEmptyState
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a friendly placeholder whenever
 * research content is unavailable.
 *
 * Used In:
 * • Research Publications
 * • Research Projects
 * • Research Partners
 * • Research Repository
 * • Dashboard Widgets
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  SearchX,
} from "lucide-react";

type ResearchEmptyStateProps = {
  title: string;

  description: string;

  icon?: ReactNode;

  actionLabel?: string;

  actionHref?: string;

  className?: string;
};

export default function ResearchEmptyState({
  title,

  description,

  icon,

  actionLabel,

  actionHref,

  className = "",
}: ResearchEmptyStateProps) {
  return (
    <Card
      className={`flex flex-col items-center py-16 text-center ${className}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icon ?? <SearchX className="h-10 w-10" />}
      </div>

      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        {description}
      </p>

      {actionLabel && actionHref && (
        <div className="mt-10">
          <Button
            href={actionHref}
            variant="primary"
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </Card>
  );
}