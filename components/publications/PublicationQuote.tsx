/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationQuote
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import { Quote } from "lucide-react";

type PublicationQuoteProps = {
  quote: string;
  author: string;
  title?: string;
  organization?: string;
  className?: string;
};

export default function PublicationQuote({
  quote,
  author,
  title,
  organization,
  className = "",
}: PublicationQuoteProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <Quote className="absolute right-8 top-8 h-16 w-16 text-blue-100" />

      <blockquote className="relative text-2xl font-medium leading-10 text-slate-800">
        "{quote}"
      </blockquote>

      <div className="mt-10 border-t border-slate-200 pt-6">
        <h4 className="font-bold text-slate-900">
          {author}
        </h4>

        {(title || organization) && (
          <p className="mt-1 text-sm text-slate-600">
            {[title, organization]
              .filter(Boolean)
              .join(" • ")}
          </p>
        )}
      </div>
    </Card>
  );
}