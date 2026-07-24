/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationCitation
 * Version: 2.0.0
 *
 * Purpose:
 * Displays publication citation
 * information using multiple
 * academic citation styles.
 *
 * Used In:
 * • Publications Page
 * • Publication Details
 * • Research Repository
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  Quote,
  Copy,
} from "lucide-react";

type PublicationCitationProps = {
  title?: string;

  description?: string;

  apa: string;

  mla?: string;

  chicago?: string;

  doi?: string;

  className?: string;
};

export default function PublicationCitation({
  title = "Citation",
  description,
  apa,
  mla,
  chicago,
  doi,
  className = "",
}: PublicationCitationProps) {
  return (
    <Card className={className}>
      <div className="flex items-center gap-3">
        <Quote className="h-6 w-6 text-emerald-700" />

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>
      </div>

      {description && (
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>
      )}

      <div className="mt-8 space-y-8">
        <div>
          <h4 className="font-semibold text-slate-700">
            APA
          </h4>

          <p className="mt-2 leading-8 text-slate-600">
            {apa}
          </p>
        </div>

        {mla && (
          <div>
            <h4 className="font-semibold text-slate-700">
              MLA
            </h4>

            <p className="mt-2 leading-8 text-slate-600">
              {mla}
            </p>
          </div>
        )}

        {chicago && (
          <div>
            <h4 className="font-semibold text-slate-700">
              Chicago
            </h4>

            <p className="mt-2 leading-8 text-slate-600">
              {chicago}
            </p>
          </div>
        )}

        {doi && (
          <div>
            <h4 className="font-semibold text-slate-700">
              DOI
            </h4>

            <p className="mt-2 break-all font-mono text-emerald-700">
              {doi}
            </p>
          </div>
        )}
      </div>

      <div className="mt-10">
        <Button variant="secondary">
          <Copy className="mr-2 h-4 w-4" />
          Copy Citation
        </Button>
      </div>
    </Card>
  );
}