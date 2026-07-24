import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  UserRound,
  Briefcase,
  GraduationCap,
  Globe,
} from "lucide-react";

const leadership = [
  {
    name: "Executive Director",
    role: "Institutional Leadership",
    description:
      "Provides strategic leadership for NICRG, oversees institutional growth, research excellence, and national engagement.",
  },
  {
    name: "Deputy Executive Director",
    role: "Operations & Programmes",
    description:
      "Coordinates institutional programmes, partnerships, capacity building, and operational effectiveness.",
  },
  {
    name: "Director of Research",
    role: "Research & Innovation",
    description:
      "Leads interdisciplinary research programmes, research quality assurance, and scholarly collaboration.",
  },
  {
    name: "Director of Partnerships",
    role: "External Relations",
    description:
      "Develops strategic partnerships with universities, governments, industry, and international organizations.",
  },
];

const advisory = [
  {
    title: "Academic Advisory Council",
    icon: GraduationCap,
    description:
      "Distinguished scholars providing strategic academic guidance across NICRG's research priorities.",
  },
  {
    title: "Policy Advisory Council",
    icon: Briefcase,
    description:
      "Experienced policymakers and practitioners strengthening evidence-informed governance and public policy.",
  },
  {
    title: "International Fellows",
    icon: Globe,
    description:
      "Global experts collaborating with NICRG to advance interdisciplinary scholarship and international partnerships.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Leadership"
          title="Leadership & Governance"
          description="NICRG is guided by experienced scholars, practitioners, and institutional leaders committed to research excellence, innovation, and national development."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Executive Leadership"
          title="Institutional Leadership Team"
          description="Our leadership team provides strategic direction while fostering interdisciplinary collaboration and institutional excellence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {leadership.map((person) => (
            <Card key={person.name}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <UserRound className="h-10 w-10 text-emerald-700" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {person.name}
              </h3>

              <p className="mt-2 font-semibold text-emerald-700">
                {person.role}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {person.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          badge="Advisory Bodies"
          title="Institutional Governance Structure"
          description="NICRG benefits from diverse expertise through advisory councils and international academic collaborations."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {advisory.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Future Leadership"
          title="Growing an Inclusive Research Community"
          description="As NICRG expands, additional leadership positions, research fellows, programme directors, and advisory members will be announced to strengthen our institutional capacity."
        />
      </Section>
    </>
  );
}