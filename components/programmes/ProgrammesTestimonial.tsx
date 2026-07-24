/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesTestimonial
 * Version: 1.0.0
 *
 * Purpose:
 * Displays a testimonial from a
 * programme participant or partner.
 *
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import { Quote } from "lucide-react";

type ProgrammesTestimonialProps = {
  quote: string;

  author: string;

  title?: string;

  organization?: string;

  className?: string;
};

export default function ProgrammesTestimonial({
  quote,
  author,
  title,
  organization,
  className = "",
}: ProgrammesTestimonialProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <Quote className="absolute right-8 top-8 h-16 w-16 text-emerald-100" />

      <blockquote className="relative text-2xl leading-10 font-medium text-slate-800">
        “{quote}”
      </blockquote>

      <div className="mt-10 border-t border-slate-200 pt-6">
        <p className="font-bold text-slate-900">
          {author}
        </p>

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