/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipQuote
 * Version: 2.0.0
 *
 * Purpose:
 * Displays an inspiring quotation from
 * a member, institutional partner,
 * executive leader, or collaborator.
 *
 * Used In:
 * • Membership
 * • Home
 * • About
 * • Testimonials
 * • Annual Reports
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import { Quote } from "lucide-react";

type MembershipQuoteProps = {
  quote: string;

  author: string;

  title?: string;

  organization?: string;

  className?: string;
};

export default function MembershipQuote({
  quote,
  author,
  title,
  organization,
  className = "",
}: MembershipQuoteProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
    >
      <Quote className="absolute right-8 top-8 h-20 w-20 text-emerald-100 opacity-70" />

      <blockquote className="relative max-w-4xl text-2xl font-medium leading-10 text-slate-800 lg:text-3xl lg:leading-[3.25rem]">
        “{quote}”
      </blockquote>

      <div className="mt-12 border-t border-slate-200 pt-6">
        <h4 className="text-lg font-bold text-slate-900">
          {author}
        </h4>

        {(title || organization) && (
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {[title, organization]
              .filter(Boolean)
              .join(" • ")}
          </p>
        )}
      </div>
    </Card>
  );
}