/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesImpactCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays the impact or outcome of a
 * flagship NICRG programme.
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type ProgrammesImpactCardProps = {
  title: string;

  description: string;

  outcome?: string;

  className?: string;
};

export default function ProgrammesImpactCard({
  title,
  description,
  outcome,
  className = "",
}: ProgrammesImpactCardProps) {
  return (
    <Card className={`h-full ${className}`}>
      {outcome && (
        <Badge variant="success">
          {outcome}
        </Badge>
      )}

      <h3 className="mt-5 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        {description}
      </p>
    </Card>
  );
}