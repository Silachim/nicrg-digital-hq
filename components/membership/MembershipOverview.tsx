/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipOverview
 * Version: 2.0.0
 *
 * Purpose:
 * Introduces NICRG membership and
 * explains why individuals and organizations
 * should become part of the community.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

type Highlight = {
  title: string;
  description: string;
};

type MembershipOverviewProps = {
  badge: string;
  title: string;
  description: string;

  highlights: Highlight[];
};

export default function MembershipOverview({
  badge,
  title,
  description,
  highlights,
}: MembershipOverviewProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mx-auto mt-10 max-w-4xl text-center">
        <p className="text-lg leading-9 text-slate-600">
          Membership in NICRG is more than joining an organization. It is an
          opportunity to become part of a collaborative community committed to
          advancing interdisciplinary research, strengthening institutions,
          promoting innovation, informing policy, and creating meaningful
          solutions to Nigeria's development challenges. Every member
          contributes unique knowledge, experience, and perspectives that enrich
          our collective mission.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <Card
            key={highlight.title}
            className="h-full"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              {highlight.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {highlight.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}