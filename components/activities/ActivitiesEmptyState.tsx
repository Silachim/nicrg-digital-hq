/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Activities Component
 * Component: ActivitiesEmptyState
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import { CalendarX2 } from "lucide-react";

type ActivitiesEmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
};

export default function ActivitiesEmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  className = "",
}: ActivitiesEmptyStateProps) {
  return (
    <Card
      className={`flex flex-col items-center py-16 text-center ${className}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icon ?? <CalendarX2 className="h-10 w-10" />}
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