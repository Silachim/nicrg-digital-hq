/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceCommitteeCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a governance committee,
 * its mandate, responsibilities,
 * and chairperson.
 *
 * Used In:
 * • Governance Structure
 * • Committee Directory
 * • Annual Reports
 * • Institutional Governance
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
  UsersRound,
  ArrowRight,
} from "lucide-react";

type GovernanceCommitteeCardProps = {
  committee: string;

  mandate: string;

  chair?: string;

  members?: number;

  status?: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
};

export default function GovernanceCommitteeCard({
  committee,
  mandate,
  chair,
  members,
  status,
  icon,
  href,
  className = "",
}: GovernanceCommitteeCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          {icon ?? <UsersRound className="h-8 w-8" />}
        </div>

        {status && (
          <Badge variant="secondary">
            {status}
          </Badge>
        )}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {committee}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {mandate}
      </p>

      {(chair || members !== undefined) && (
        <div className="mt-6 border-t border-slate-200 pt-6 space-y-2">
          {chair && (
            <p className="text-sm text-slate-700">
              <span className="font-semibold">
                Chair:
              </span>{" "}
              {chair}
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
        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            View Committee

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}