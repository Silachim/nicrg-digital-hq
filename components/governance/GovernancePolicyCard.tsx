/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernancePolicyCard
 * Version: 2.0.0
 *
 * Purpose:
 * Displays an individual governance policy,
 * institutional document, or governance
 * guideline.
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  FileText,
  ArrowRight,
} from "lucide-react";

type GovernancePolicyCardProps = {
  title: string;

  category: string;

  description: string;

  version?: string;

  effectiveDate?: string;

  href?: string;

  buttonLabel?: string;

  className?: string;
};

export default function GovernancePolicyCard({
  title,
  category,
  description,
  version,
  effectiveDate,
  href,
  buttonLabel = "View Policy",
  className = "",
}: GovernancePolicyCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          <FileText className="h-8 w-8" />
        </div>

        <Badge variant="secondary">
          {category}
        </Badge>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      {(version || effectiveDate) && (
        <div className="mt-6 border-t border-slate-200 pt-6 space-y-2">
          {version && (
            <p className="text-sm text-slate-700">
              <strong>Version:</strong> {version}
            </p>
          )}

          {effectiveDate && (
            <p className="text-sm text-slate-700">
              <strong>Effective:</strong> {effectiveDate}
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