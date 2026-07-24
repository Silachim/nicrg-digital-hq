/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipEligibilityCard
 * Version: 2.0.0
 *
 * Purpose:
 * Describes the individuals or organizations
 * for whom a membership option is most
 * appropriate, emphasizing inclusiveness
 * rather than exclusion.
 *
 * NOTE:
 * During UI consolidation this component
 * may be renamed to MembershipAudienceCard.
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import {
  CircleCheck,
  Users,
} from "lucide-react";

type MembershipEligibilityCardProps = {
  title: string;

  requirements: string[];

  className?: string;
};

export default function MembershipEligibilityCard({
  title,
  requirements,
  className = "",
}: MembershipEligibilityCardProps) {
  return (
    <Card
      className={`h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 shadow-sm">
          <Users className="h-7 w-7" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Best Suited For
          </p>

          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {requirements.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />

            <span className="leading-7 text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}