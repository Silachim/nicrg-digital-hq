/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipBenefits
 * Version: 2.0.0
 *
 * Purpose:
 * Highlights the value of NICRG membership
 * by showcasing the professional,
 * collaborative, and developmental
 * benefits available to every member.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import MembershipBenefitCard from "./MembershipBenefitCard";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type MembershipBenefitsProps = {
  badge: string;
  title: string;
  description: string;
  benefits: Benefit[];
};

export default function MembershipBenefits({
  badge,
  title,
  description,
  benefits,
}: MembershipBenefitsProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mx-auto mt-10 max-w-4xl text-center">
        <p className="text-lg leading-9 text-slate-600">
          Every NICRG member, regardless of membership pathway or category,
          enjoys opportunities to learn, collaborate, contribute, and grow
          within an inclusive community dedicated to advancing interdisciplinary
          research, innovation, evidence-informed decision-making, and
          sustainable national development.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <MembershipBenefitCard
              key={benefit.title}
              {...benefit}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}