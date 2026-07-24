/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipJourney
 * Version: 2.0.0
 *
 * Purpose:
 * Guides prospective members through the
 * NICRG membership application journey.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import MembershipApplicationCard from "./MembershipApplicationCard";

type Step = {
  step: number;
  title: string;
  description: string;
  status?: string;
};

type MembershipJourneyProps = {
  badge: string;
  title: string;
  description: string;
  steps: Step[];
};

export default function MembershipJourney({
  badge,
  title,
  description,
  steps,
}: MembershipJourneyProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mx-auto mt-10 max-w-4xl text-center">
        <p className="text-lg leading-9 text-slate-600">
          Becoming a NICRG member is designed to be simple, transparent, and
          welcoming. Our membership process ensures that every applicant is
          guided toward the membership option that best reflects their
          background, interests, and desired level of engagement.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <MembershipApplicationCard
              key={step.step}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}