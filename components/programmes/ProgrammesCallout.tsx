/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesCallout
 * Version: 2.0.0
 *
 * Purpose:
 * Highlights a strategic institutional
 * programme announcement or invitation.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

type ProgrammesCalloutProps = {
  badge: string;

  title: string;

  description: string;

  primaryButton: string;

  secondaryButton: string;
};

export default function ProgrammesCallout({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: ProgrammesCalloutProps) {
  return (
    <Section background="emerald">
      <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-700 px-8 py-16 text-center text-white shadow-xl">
        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]">
          {badge}
        </span>

        <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
          {description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="primary">
            {primaryButton}
          </Button>

          <Button variant="secondary">
            {secondaryButton}
          </Button>
        </div>
      </div>
    </Section>
  );
}