/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceCTA
 * Version: 2.0.0
 *
 * Purpose:
 * Closing call-to-action for the Governance
 * page, encouraging engagement with NICRG's
 * governance framework through membership,
 * partnerships, and institutional participation.
 *
 * Used In:
 * • Governance Page
 * • Annual Reports
 * • Institutional Governance
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import CTA from "@/components/ui/CTA";

type GovernanceCTAProps = {
  title: string;

  description: string;

  primaryButton: {
    label: string;
    href: string;
  };

  secondaryButton: {
    label: string;
    href: string;
  };
};

export default function GovernanceCTA({
  title,
  description,
  primaryButton,
  secondaryButton,
}: GovernanceCTAProps) {
  return (
    <Section background="gradient">
      <CTA
        title={title}
        description={description}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      />
    </Section>
  );
}