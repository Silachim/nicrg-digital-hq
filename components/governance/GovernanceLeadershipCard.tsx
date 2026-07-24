/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceLeadershipCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays an executive leader,
 * senior officer, director,
 * or institutional administrator.
 *
 * Used In:
 * • Executive Leadership
 * • Governance
 * • Secretariat
 * • Institutional Profile
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
  UserRound,
  ArrowRight,
} from "lucide-react";

type LeadershipStatus =
  | "President"
  | "Vice President"
  | "Executive Secretary"
  | "Treasurer"
  | "Director"
  | "Officer";

type GovernanceLeadershipCardProps = {
  name: string;

  title: string;

  department?: string;

  biography: string;

  image?: ReactNode;

  status?: LeadershipStatus;

  href?: string;

  buttonLabel?: string;

  className?: string;
};

export default function GovernanceLeadershipCard({
  name,
  title,
  department,
  biography,
  image,
  status,
  href,
  buttonLabel = "View Biography",
  className = "",
}: GovernanceLeadershipCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700">
          {image ?? (
            <UserRound className="h-12 w-12" />
          )}
        </div>

        {status && (
          <Badge variant="primary">
            {status}
          </Badge>
        )}
      </div>

      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-lg font-semibold text-emerald-700">
        {title}
      </p>

      {department && (
        <p className="mt-2 text-sm text-slate-500">
          {department}
        </p>
      )}

      <p className="mt-6 flex-1 leading-8 text-slate-600">
        {biography}
      </p>

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