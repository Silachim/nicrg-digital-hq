import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import {
  FlaskConical,
  Scale,
  Lightbulb,
  GraduationCap,
  Users,
  Landmark,
} from "lucide-react";

const objectives = [
  {
    icon: FlaskConical,
    title: "Research Excellence",
    description:
      "Produce high-quality interdisciplinary research that addresses Nigeria's priority challenges.",
  },
  {
    icon: Scale,
    title: "Policy Development",
    description:
      "Transform research findings into evidence-informed policy recommendations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Promote creative, technology-enabled and practical solutions for sustainable development.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "Support researchers, educators, and young professionals through learning and mentorship.",
  },
  {
    icon: Users,
    title: "Strategic Partnerships",
    description:
      "Build national and international collaborations across academia, industry, and government.",
  },
  {
    icon: Landmark,
    title: "National Impact",
    description:
      "Generate measurable social, educational, economic, and policy outcomes through research.",
  },
];

export default function StrategicObjectives() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Strategic Priorities"
        badgeVariant="secondary"
        title="What We Do"
        description="Our work is guided by six interconnected priorities that translate research into meaningful national and global impact."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {objectives.map((objective) => (
          <Card key={objective.title}>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <Icon
                icon={objective.icon}
                className="text-emerald-700"
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {objective.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {objective.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}