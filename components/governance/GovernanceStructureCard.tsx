/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceStructureCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a governance organ,
 * institutional office, or reporting
 * unit within NICRG's governance
 * architecture.
 *
 * Used In:
 * • Governance Structure
 * • Organizational Hierarchy
 * • Institutional Profile
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
  Landmark,
  ArrowRight,
} from "lucide-react";

type GovernanceStructureCardProps = {
  title: string;

  description: string;

  reportsTo?: string;

  members?: number;

  icon?: ReactNode;

  href?: string;

  buttonLabel?: string;

  className?: string;
};

export default function GovernanceStructureCard({
  title,
  description,
  reportsTo,
  members,
  icon,
  href,
  buttonLabel = "View Structure",
  className = "",
}: GovernanceStructureCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
          {icon ?? (
            <Landmark className="h-10 w-10" />
          )}
        </div>

        <Badge variant="secondary">
          Governance Unit
        </Badge>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      {(reportsTo || members !== undefined) && (
        <div className="mt-8 border-t border-slate-200 pt-6 space-y-2">
          {reportsTo && (
            <p className="text-sm text-slate-700">
              <span className="font-semibold">
                Reports To:
              </span>{" "}
              {reportsTo}
            </p>
          )}

          {members !== undefined && (
            <p className="text-sm text-slate-700">
              <span className="font-semibold">
                Members:
              </span>{" "}
              {members}
            </p>
          )}
        </div>
      )}

      {href && (
        <div className="mt-auto pt-8">
          <Button
            href={href}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            {buttonLabel}

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}