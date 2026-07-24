/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Activities Component
 * Component: ActivitiesCallout
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { Sparkles } from "lucide-react";

type ActivitiesCalloutProps = {
  title: string;
  description: string;
  badge?: string;
  icon?: ReactNode;
  className?: string;
};

export default function ActivitiesCallout({
  title,
  description,
  badge,
  icon,
  className = "",
}: ActivitiesCalloutProps) {
  return (
    <Card
      className={`border-l-4 border-l-emerald-600 ${className}`}
    >
      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon ?? <Sparkles className="h-8 w-8" />}
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