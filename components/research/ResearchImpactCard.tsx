/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchImpactCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a strategic research impact area,
 * highlighting how NICRG research contributes
 * to national development and policy.
 *
 * Used In:
 * • Research Impact
 * • Annual Reports
 * • Strategic Plan
 * • Research Dashboard
 * • Institutional Profile
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type ResearchImpactCardProps = {
  title: string;

  description: string;

  icon: ReactNode;

  category?: string;

  accentColor?: string;

  className?: string;
};

export default function ResearchImpactCard({
  title,
  description,
  icon,
  category,
  accentColor = "bg-emerald-100 text-emerald-700",
  className = "",
}: ResearchImpactCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div
        className={[
          "inline-flex h-16 w-16 items-center justify-center rounded-2xl",
          accentColor,
        ].join(" ")}
      >
        {icon}
      </div>

      {category && (
        <div className="mt-6">
          <Badge variant="primary">
            {category}
          </Badge>
        </div>
      )}

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}