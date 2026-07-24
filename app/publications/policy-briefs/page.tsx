import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  FileBadge,
  Landmark,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const audiences = [
  "Federal Government",
  "State Governments",
  "Development Partners",
  "Civil Society",
  "Private Sector",
  "International Organisations",
];

export default function PolicyBriefsPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Policy Briefs"
          description="NICRG Policy Briefs translate rigorous research into concise evidence-informed recommendations that support effective policymaking and institutional decision making."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Who We Serve"
          title="Evidence for Decision Makers"
          description="Our policy briefs are designed for leaders responsible for shaping policy, governance, development, and public services."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {audiences.map((group) => (
            <Card key={group}>
              <Landmark className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-2xl font-bold">
                {group}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Evidence-informed recommendations tailored to strategic
                decision makers and institutional leaders.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="Policy Impact"
          title="Turning Research into Action"
          description="NICRG believes research achieves its highest value when it informs policy, strengthens institutions, and improves people's lives."
        />

        <div className="mt-16 text-center">
          <Briefcase className="mx-auto h-16 w-16 text-emerald-700" />

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-600">
            Future policy briefs published here will include executive
            summaries, evidence synthesis, implementation guidance, and
            actionable policy recommendations.
          </p>

          <div className="mt-10">
            <Button href="/publications">
              Explore All Publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}