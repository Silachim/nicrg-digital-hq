/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipApplicationCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays one step in the NICRG
 * membership application journey.
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type MembershipApplicationCardProps = {
  step: number;

  title: string;

  description: string;

  status?: string;

  isLast?: boolean;

  className?: string;
};

export default function MembershipApplicationCard({
  step,
  title,
  description,
  status,
  isLast = false,
  className = "",
}: MembershipApplicationCardProps) {
  return (
    <div className={`relative ${className}`}>
      <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-700 shadow-sm">
            {step}
          </div>

          {status && (
            <Badge variant="primary">
              {status}
            </Badge>
          )}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-5 flex-1 leading-8 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-700">
          <CheckCircle2 className="h-5 w-5" />
          <span>Step {step}</span>
        </div>
      </Card>

      {!isLast && (
        <ArrowRight className="absolute -right-6 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-emerald-300 xl:block" />
      )}
    </div>
  );
}