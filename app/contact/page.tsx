/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Contact Page
 *
 * Purpose:
 * Official communication page for NICRG.
 *
 * --------------------------------------------------------
 */

import {
  ContactHero,
  ContactInformation,
  ContactChannels,
  ContactForm,
  ContactFAQ,
  ContactSocial,
  OfficeLocation,
  ContactCallout,
  ContactCTA,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <ContactInformation />

      <ContactChannels />

      <ContactForm />

      <ContactFAQ />

      <ContactSocial />

      <OfficeLocation />

      <ContactCallout />

      <ContactCTA />
    </>
  );
}