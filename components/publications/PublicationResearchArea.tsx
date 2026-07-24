/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationResearchArea
 * Version: 2.0.0
 *
 * Purpose:
 * Displays the research domain,
 * thematic focus, and keywords
 * associated with a publication.
 *
 * Used In:
 * • Publications Page
 * • Publication Details
 * • Research Repository
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  Microscope,
} from "lucide-react";

type PublicationResearchAreaProps = {
  heading?: string;

  title: string;

  description: string;

  keywords: string[];

  className?: string;
};

export default function PublicationResearchArea({
  heading = "Research Area",
  title,
  description,
  keywords,
  className = "",
}: PublicationResearchAreaProps) {
  return (
    <Card className={className}>
      <div className="flex items-center gap-3">
        <Microscope className="h-6 w-6 text-emerald-700" />

        <h3 className="text-2xl font-bold text-slate-900">
          {heading}
        </h3>
      </div>

      <h4 className="mt-6 text-xl font-semibold text-emerald-700">
        {title}
      </h4>

      <p className="mt-4 leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {keywords.map((keyword, index) => (
          <Badge
            key={`${keyword}-${index}`}
            variant="primary"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </Card>
  );
}