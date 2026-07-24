import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  Star,
  ExternalLink,
} from "lucide-react";

type FeaturedPublicationCardProps = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  summary: string;
  href?: string;
};

export default function FeaturedPublicationCard({
  title,
  authors,
  journal,
  year,
  summary,
  href,
}: FeaturedPublicationCardProps) {
  return (
    <Card className="border-2 border-emerald-200">
      <Badge variant="primary">
        Featured Publication
      </Badge>

      <div className="mt-6 flex items-center gap-3">
        <Star className="h-8 w-8 text-amber-500" />

        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>
      </div>

      <p className="mt-4 text-lg font-semibold text-emerald-700">
        {authors}
      </p>

      <p className="mt-2 text-slate-500">
        {journal} • {year}
      </p>

      <p className="mt-8 leading-8 text-slate-600">
        {summary}
      </p>

      {href && (
        <div className="mt-10">
          <Button
            href={href}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            View Publication
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Card>
  );
}