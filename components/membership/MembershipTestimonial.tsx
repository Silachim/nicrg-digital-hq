/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipTestimonial
 * Version: 2.0.0
 *
 * Purpose:
 * Displays a testimonial from a NICRG
 * member, partner, collaborator, or
 * institutional representative.
 * --------------------------------------------------------
 */

import Card from "@/components/ui/Card";

import {
  Quote,
  UserCircle2,
} from "lucide-react";

type MembershipTestimonialProps = {
  quote: string;

  name: string;

  title?: string;

  institution?: string;

  className?: string;
};

export default function MembershipTestimonial({
  quote,
  name,
  title,
  institution,
  className = "",
}: MembershipTestimonialProps) {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`}
    >
      <Quote className="absolute right-8 top-8 h-16 w-16 text-emerald-100 opacity-70" />

      <blockquote className="relative text-xl font-medium leading-9 text-slate-800 lg:text-2xl lg:leading-10">
        “{quote}”
      </blockquote>

      <div className="mt-10 flex items-center gap-4 border-t border-slate-200 pt-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <UserCircle2 className="h-8 w-8" />
        </div>

        <div>
          <p className="text-lg font-bold text-slate-900">
            {name}
          </p>

          {(title || institution) && (
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {[title, institution]
                .filter(Boolean)
                .join(" • ")}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}