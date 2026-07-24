import Section from "@/components/ui/Section";
import CTA from "@/components/ui/CTA";

export default function AboutCTA() {
  return (
    <Section background="gradient">
      <CTA
        title="Join a Growing Network of Researchers and Changemakers"
        description="Whether you are a researcher, policymaker, practitioner, student, institutional partner, or member of the Nigerian diaspora, NICRG provides opportunities to collaborate, publish, innovate, and contribute to sustainable national development."
        primaryButton={{
          label: "Become a Member",
          href: "/membership",
        }}
        secondaryButton={{
          label: "Contact NICRG",
          href: "/contact",
        }}
      />
    </Section>
  );
}