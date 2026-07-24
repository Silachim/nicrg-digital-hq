/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactCTA
 * Version: 2.0.0
 *
 * Purpose:
 * Final call-to-action encouraging visitors
 * to engage with NICRG.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import CTA from "@/components/ui/CTA";

import { contact } from "@/content";

export default function ContactCTA() {
  return (
    <Section
      id="contact-cta"
      background="gradient"
    >
      <CTA
        title={contact.cta.title}
        description={contact.cta.description}
        primaryButton={contact.cta.primaryButton}
        secondaryButton={contact.cta.secondaryButton}
      />
    </Section>
  );
}