/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceQuote
 * Version: 2.0.0
 *
 * Purpose:
 * Displays an institutional leadership quote,
 * governance philosophy, or strategic message
 * from the President, Board Chair, Executive
 * Secretary, or Governing Council.
 *
 * Used In:
 * • Governance
 * • Leadership
 * • Strategic Plan
 * • Annual Reports
 * • About NICRG
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { Quote } from "lucide-react";

type GovernanceQuoteProps = {
  quote: string;

  author: string;

  title?: string;

  organization?: string;

  className?: string;
};

export default function GovernanceQuote({
  quote,
  author,
  title,
  organization,
  className = "",
}: GovernanceQuoteProps) {
  return (
    <Section background="slate">
      <div className="mx-auto max-w-5xl">
        <Card
          className={`relative overflow-hidden text-center ${className}`}
        >
          <Quote className="absolute right-10 top-8 h-24 w-24 text-emerald-100 opacity-70" />

          <Badge variant="primary">
            Leadership Perspective
          </Badge>

          <blockquote className="relative mx-auto mt-8 max-w-4xl text-2xl font-medium leading-10 text-slate-800 lg:text-3xl lg:leading-[3.2rem]">
            “{quote}”
          </blockquote>

          <div className="mx-auto mt-12 h-1 w-20 rounded-full bg-emerald-600" />

          <div className="mt-8">
            <h4 className="text-xl font-bold text-slate-900">
              {author}
            </h4>

            {(title || organization) && (
              <p className="mt-2 text-base text-slate-600">
                {[title, organization]
                  .filter(Boolean)
                  .join(" • ")}
              </p>
            )}
          </div>
        </Card>
      </div>
    </Section>
  );
}