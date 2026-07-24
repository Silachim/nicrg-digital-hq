/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipEmptyState
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a welcoming empty state for
 * membership pages, applications,
 * opportunities, or future features.
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  UsersRound,
} from "lucide-react";

type MembershipEmptyStateProps = {
  title: string;

  description: string;

  icon?: ReactNode;

  actionLabel?: string;

  actionHref?: string;

  className?: string;
};

export default function MembershipEmptyState({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  className = "",
}: MembershipEmptyStateProps) {
  return (
    <Card
      className={`flex flex-col items-center py-16 text-center transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm">
        {icon ?? <UsersRound className="h-10 w-10" />}
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