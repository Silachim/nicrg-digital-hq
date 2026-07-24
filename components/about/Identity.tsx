import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { Quote } from "lucide-react";

import { organization } from "@/content";

export default function Identity() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Institutional Identity"
        title="Who We Are"
        description="NICRG brings together researchers, professionals, policymakers, industry leaders, and civil society to generate interdisciplinary knowledge that addresses Nigeria's most pressing challenges."
      />

      <Card className="relative mx-auto mt-16 max-w-5xl overflow-hidden">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-emerald-100" />

        <div className="px-10 py-14 md:px-16 md:py-16">
          <Badge variant="primary">
            Our Identity
          </Badge>

          <blockquote className="mt-8 text-center text-2xl font-medium leading-10 text-slate-700 md:text-3xl">
            "{organization.identity}"
          </blockquote>
        </div>
      </Card>
    </Section>
  );
}