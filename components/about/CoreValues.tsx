import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

import { coreValues } from "@/content";

import {
  Search,
  Scale,
  Users,
  GraduationCap,
  ShieldCheck,
  Handshake,
  Lightbulb,
  BadgeCheck,
  HeartHandshake,
  Leaf,
} from "lucide-react";

const iconMap = {
  search: Search,
  scale: Scale,
  users: Users,
  graduation: GraduationCap,
  shield: ShieldCheck,
  handshake: Handshake,
  lightbulb: Lightbulb,
  "badge-check": BadgeCheck,
  heart: HeartHandshake,
  leaf: Leaf,
};

export default function CoreValues() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Our Values"
        title="Principles That Guide Everything We Do"
        description="These values define how NICRG conducts research, builds partnerships, serves communities, and advances national development."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
        {coreValues.map((value) => {
          const LucideIcon =
            iconMap[value.icon as keyof typeof iconMap];

          return (
            <Card
              key={value.title}
              className="h-full text-center"
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Icon
                  icon={LucideIcon}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {value.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}