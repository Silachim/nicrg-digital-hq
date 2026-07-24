/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Component
 * Component: ContactHero
 * Version: 1.0.0
 *
 * Purpose:
 * Executive hero section for the Contact page.
 * --------------------------------------------------------
 */

import Hero from "@/components/ui/Hero";
import { contact } from "@/content";

export default function ContactHero() {
  return (
    <Hero
      badge={contact.hero.badge}
      title={contact.hero.title}
      description={contact.hero.description}
      primaryButton={{
        label: "Send an Enquiry",
        href: "#contact-form",
      }}
      secondaryButton={{
        label: "View Contact Channels",
        href: "#contact-channels",
      }}
      background="gradient"
      align="center"
    />
  );
}