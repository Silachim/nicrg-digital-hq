/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchPartnerCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays an institutional, governmental,
 * academic, industry, or development partner.
 *
 * Used In:
 * • Research Partners
 * • Research Dashboard
 * • Annual Reports
 * • Institutional Profile
 * • Partnership Pages
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
  ArrowRight,
  Building2,
} from "lucide-react";

type ResearchPartnerCardProps = {
  name: string;

  category: string;

  description: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
};

export default function ResearchPartnerCard({
  name,

  category,

  description,

  icon,

  href,

  className = "",
}: ResearchPartnerCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          {icon ?? <Building2 className="h-8 w-8" />}
        </div>

        <Badge variant="secondary">
          {category}
        </Badge>
      </div>

      <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-900">
        {name}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      {href && (
        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            Learn More

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}