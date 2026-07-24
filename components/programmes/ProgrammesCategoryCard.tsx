/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesCategoryCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a programme category.
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  FolderKanban,
  ArrowRight,
} from "lucide-react";

type ProgrammesCategoryCardProps = {
  title: string;

  description: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
};

export default function ProgrammesCategoryCard({
  title,
  description,
  icon,
  href,
  className = "",
}: ProgrammesCategoryCardProps) {
  return (
    <Card className={`flex h-full flex-col ${className}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        {icon ?? <FolderKanban className="h-8 w-8" />}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
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
            Learn More

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}