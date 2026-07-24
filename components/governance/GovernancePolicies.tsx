/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernancePolicies
 * Version: 2.0.0
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import GovernancePolicyCard from "./GovernancePolicyCard";

type Policy = {
  title: string;

  category: string;

  description: string;

  version?: string;

  effectiveDate?: string;

  href?: string;
};

type GovernancePoliciesProps = {
  badge: string;

  title: string;

  description: string;

  policies: Policy[];
};

export default function GovernancePolicies({
  badge,
  title,
  description,
  policies,
}: GovernancePoliciesProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {policies.map((policy) => (
          <GovernancePolicyCard
            key={policy.title}
            {...policy}
          />
        ))}
      </div>
    </Section>
  );
}