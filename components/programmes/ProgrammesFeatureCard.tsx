/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesFeatureCard
 * Version: 1.0.0
 *
 * Purpose:
 * Highlights a flagship programme,
 * initiative, or institutional activity.
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  Sparkles,
  ArrowRight,
} from "lucide-react";

type ProgrammesFeatureCardProps = {
  title: string;

  description: string;

  category?: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
};

export default function ProgrammesFeatureCard({
  title,
  description,
  category,
  icon,
  href,
  className = "",
}: ProgrammesFeatureCardProps) {
  return (
    <Card className={`flex h-full flex-col ${className}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        {icon ?? <Sparkles className="h-8 w-8" />}
      </div>

      {category && (
        <Badge
          variant="primary"
          className="mt-6"
        >
          {category}
        </Badge>
      )}

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
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
            Explore Programme

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}