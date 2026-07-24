/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Activities Component
 * Component: ActivitiesQuote
 * Version: 1.0.0
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import { Quote } from "lucide-react";

type ActivitiesQuoteProps = {
  quote: string;
  author: string;
  title?: string;
  organization?: string;
  className?: string;
};

export default function ActivitiesQuote({
  quote,
  author,
  title,
  organization,
  className = "",
}: ActivitiesQuoteProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <Quote className="absolute right-8 top-8 h-16 w-16 text-emerald-100" />

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