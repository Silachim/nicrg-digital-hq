import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import { organization } from "@/content";

export default function Identity() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Institutional Identity"
        title="Who We Are"
        description="NICRG brings together researchers, professionals, policymakers, industry leaders, and civil society to generate interdisciplinary knowledge that addresses Nigeria's most pressing challenges."
      />

      <Card className="mx-auto mt-16 max-w-5xl p-10 md:p-14">
        <blockquote className="text-center text-2xl font-medium leading-10 text-slate-700 md:text-3xl">
          "{organization.identity}"
        </blockquote>
      </Card>
    </Section>
  );
}