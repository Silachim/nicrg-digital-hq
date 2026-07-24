/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceCouncilCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a Governing Council member,
 * Board of Trustee, Executive Council
 * member, or Advisory Council member.
 *
 * Used In:
 * • Governance Council
 * • Board of Trustees
 * • Executive Council
 * • Advisory Council
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

type CouncilStatus =
  | "Chair"
  | "Vice Chair"
  | "Executive"
  | "Member"
  | "Advisor";

type GovernanceCouncilCardProps = {
  name: string;

  position: string;

  department?: string;

  biography: string;

  status?: CouncilStatus;

  image?: ReactNode;

  href?: string;

  buttonLabel?: string;

  className?: string;
};

export default function GovernanceCouncilCard({
  name,
  position,
  department,
  biography,
  status,
  image,
  href,
  buttonLabel = "View Profile",
  className = "",
}: GovernanceCouncilCardProps) {
  const badgeVariant = {
    Chair: "success",
    "Vice Chair": "secondary",
    Executive: "research",
    Member: "neutral",
    Advisor: "warning",
  } as const;

  return (
    <Card
      className={`group flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-transform duration-300 group-hover:scale-110">
          {image ?? (
            <UserRound className="h-10 w-10" />
          )}
        </div>

        {status && (
          <Badge
            variant={badgeVariant[status]}
          >
            {status}
          </Badge>
        )}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-2 text-lg font-semibold text-emerald-700">
        {position}
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