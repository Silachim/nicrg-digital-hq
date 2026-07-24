/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceEmptyState
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a professional placeholder when
 * governance information is unavailable,
 * under review, or awaiting publication.
 *
 * Used In:
 * • Governance Dashboard
 * • Leadership
 * • Committees
 * • Policies
 * • Strategic Documents
 * • Annual Reports
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  ShieldOff,
} from "lucide-react";

type GovernanceEmptyStateProps = {
  title: string;

  description: string;

  icon?: ReactNode;

  badge?: string;

  actionLabel?: string;

  actionHref?: string;

  secondaryActionLabel?: string;

  secondaryActionHref?: string;

  className?: string;
};

export default function GovernanceEmptyState({
  title,
  description,
  icon,
  badge = "Coming Soon",
  actionLabel,
  actionHref,
  secondaryActionLabel,
  secondaryActionHref,
  className = "",
}: GovernanceEmptyStateProps) {
  return (
    <Card
      className={`flex flex-col items-center py-16 text-center ${className}`}
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icon ?? (
          <ShieldOff className="h-12 w-12" />
        )}
      </div>

      <Badge
        variant="neutral"
        className="mt-8"
      >
        {badge}
      </Badge>

      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 max-w-2xl leading-8 text-slate-600">
        {description}
      </p>

      {(actionLabel || secondaryActionLabel) && (
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {actionLabel && actionHref && (
            <Button
              href={actionHref}
              variant="primary"
            >
              {actionLabel}
            </Button>
          )}

          {secondaryActionLabel &&
            secondaryActionHref && (
              <Button
                href={secondaryActionHref}
                variant="secondary"
              >
                {secondaryActionLabel}
              </Button>
            )}
        </div>
      )}
    </Card>
  );
}