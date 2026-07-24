import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Building2,
  GraduationCap,
  Users,
  Landmark,
} from "lucide-react";

const focusAreas = [
  {
    title: "Institutional Strengthening",
    description:
      "Supporting universities, research institutes, ministries, and development organisations through sustainable institutional development.",
    icon: Building2,
  },
  {
    title: "Research Capacity",
    description:
      "Developing research excellence through mentoring, grant development, scientific writing, and collaborative scholarship.",
    icon: GraduationCap,
  },
  {
    title: "Leadership Development",
    description:
      "Preparing research leaders capable of influencing policy and driving innovation.",
    icon: Users,
  },
  {
    title: "Public Sector Capacity",
    description:
      "Enhancing evidence-informed governance through policy training and institutional partnerships.",
    icon: Landmark,
  },
];

export default function CapacityBuildingPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Programmes"
          title="Capacity Building"
          description="NICRG strengthens individuals, institutions, and systems through sustainable knowledge development."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Focus Areas"
          title="Building Institutional Excellence"
          description="Our programmes improve research productivity, leadership, governance, and innovation."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <Card key={area.title}>
                <Icon className="h-10 w-10 text-emerald-700" />
                <h3 className="mt-6 text-2xl font-bold">{area.title}</h3>
                <p className="mt-5 leading-8 text-slate-600">
                  {area.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}