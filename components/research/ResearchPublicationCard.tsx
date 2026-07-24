/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchPublicationCard
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a research publication, policy paper,
 * technical report, or scholarly output.
 *
 * Used In:
 * • Research Publications
 * • Annual Reports
 * • Research Dashboard
 * • Research Cluster Pages
 * • Institutional Repository
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
  Calendar,
  ArrowRight,
  BookOpen,
} from "lucide-react";

type ResearchPublicationCardProps = {
  title: string;

  description: string;

  type?: string;

  year?: string;

  authors?: string;

  icon?: ReactNode;

  href?: string;

  className?: string;
};

export default function ResearchPublicationCard({
  title,

  description,

  type = "Publication",

  year,

  authors,

  icon,

  href,

  className = "",
}: ResearchPublicationCardProps) {
  return (
    <Card
      className={`flex h-full flex-col ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon ?? <BookOpen className="h-7 w-7" />}
        </div>

        <Badge variant="primary">
          {type}
        </Badge>
      </div>

      <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {description}
      </p>

      {(authors || year) && (
        <div className="mt-6 space-y-3 border-t border-slate-200 pt-6">
          {authors && (
            <p className="text-sm font-medium text-slate-700">
              {authors}
            </p>
          )}

          {year && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />

              <span>{year}</span>
            </div>
          )}
        </div>
      )}

      {href && (
        <div className="mt-8">
          <Button
            href={href}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            Read Publication

            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}