/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchQuote
 * Version: 1.0.0
 *
 * Purpose:
 * Displays an editorial quote, research insight,
 * leadership statement, or featured testimonial.
 *
 * Used In:
 * • Research Overview
 * • Research Philosophy
 * • Annual Reports
 * • Strategic Plan
 * • Publications
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import {
  Quote,
} from "lucide-react";

type ResearchQuoteProps = {
  quote: string;

  author: string;

  role?: string;

  organization?: string;

  className?: string;
};

export default function ResearchQuote({
  quote,

  author,

  role,

  organization,

  className = "",
}: ResearchQuoteProps) {
  return (
    <Card
      className={`relative overflow-hidden ${className}`}
    >
      <Quote className="absolute right-8 top-8 h-16 w-16 text-emerald-100" />

      <blockquote className="relative text-2xl font-medium leading-10 text-slate-800">
        “{quote}”
      </blockquote>

      <div className="mt-10 border-t border-slate-200 pt-6">
        <p className="font-bold text-slate-900">
          {author}
        </p>

        {(role || organization) && (
          <p className="mt-1 text-sm text-slate-600">
            {[role, organization]
              .filter(Boolean)
              .join(" • ")}
          </p>
        )}
      </div>
    </Card>
  );
}