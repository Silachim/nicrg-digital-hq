/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactCallout
 * Version: 1.0.0
 *
 * Purpose:
 * Final call-to-action encouraging visitors
 * to collaborate, become members, or begin
 * a conversation with NICRG.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import CTA from "@/components/ui/CTA";

import { contact } from "@/content";

export default function ContactCallout() {
  return (
    <Section background="gradient">
      <CTA
        title={contact.cta.title}
        description={contact.cta.description}
        primaryButton={{
          label: "Become a Member",
          href: "/membership",
        }}
        secondaryButton={{
          label: "Explore Research",
          href: "/research",
        }}
      />
    </Section>
  );
}