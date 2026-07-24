/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipTierCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a NICRG membership option,
 * including eligibility, benefits,
 * membership contribution (where applicable),
 * and application CTA.
 *
 * NOTE:
 * This component will be renamed to
 * MembershipOptionCard during UI consolidation.
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

type MembershipTierCardProps = {
  title: string;

  description: string;

  benefits: string[];

  annualFee?: string;

  badge?: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
};

export default function MembershipTierCard({
  title,
  description,
  benefits,
  annualFee,
  badge,
  icon,
  href,
  className = "",
}: MembershipTierCardProps) {
  return (
    <Card
      className={`flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>

        {badge && (
          <Badge variant="primary">
            {badge}
          </Badge>
        )}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      {annualFee && (
        <p className="mt-2 text-lg font-semibold text-emerald-700">
          {annualFee}
        </p>
      )}

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

            <span className="leading-7 text-slate-700">
              {benefit}
            </span>
          </div>
        ))}
      </div>

      {href && (
        <div className="mt-10 pt-2">
          <Button
            href={href}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            Apply for Membership

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}