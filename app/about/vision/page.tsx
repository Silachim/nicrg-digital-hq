import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Eye,
  Target,
  Scale,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Research Excellence",
    description:
      "We pursue rigorous, ethical, and interdisciplinary research that meets the highest international standards.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description:
      "We remain independent, transparent, objective, and accountable in all our activities.",
    icon: ShieldCheck,
  },
  {
    title: "Public Service",
    description:
      "Our work exists to improve society through evidence-informed decision making.",
    icon: Scale,
  },
  {
    title: "Collaboration",
    description:
      "We believe complex challenges require diverse perspectives and partnerships.",
    icon: Users,
  },
];

export default function VisionMissionPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="About NICRG"
          title="Vision, Mission & Core Values"
          description="The principles that guide our research, partnerships, and institutional development."
        />
      </Section>

      <Section background="white">
        <div className="grid gap-10 lg:grid-cols-2">

          <Card>
            <Eye className="h-12 w-12 text-emerald-700" />

            <h2 className="mt-6 text-3xl font-bold">
              Our Vision
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              To become Africa's leading interdisciplinary research institute
              advancing evidence, innovation, and transformative public policy
              for sustainable national development.
            </p>
          </Card>

          <Card>
            <Target className="h-12 w-12 text-emerald-700" />

            <h2 className="mt-6 text-3xl font-bold">
              Our Mission
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              NICRG generates high-quality interdisciplinary research,
              strengthens institutional capacity, promotes evidence-informed
              policymaking, and builds partnerships that address Nigeria's most
              pressing development challenges.
            </p>
          </Card>

        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          badge="Core Values"
          title="The Principles That Define Us"
          description="Every programme, publication, and partnership is guided by these institutional values."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <Card key={value.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}