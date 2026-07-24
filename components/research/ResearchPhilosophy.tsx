import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

import { research } from "@/content";

import {
  Search,
  Lightbulb,
  Scale,
  ArrowRightCircle,
} from "lucide-react";

const icons = [
  Search,
  Lightbulb,
  Scale,
  ArrowRightCircle,
];

export default function ResearchPhilosophy() {
  return (
    <Section background="white">
      <SectionHeader
        badge={research.philosophy.badge}
        title={research.philosophy.title}
        description={research.philosophy.description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {research.philosophy.identities.map((identity, index) => {
          const LucideIcon = icons[index];

          return (
            <Card
              key={identity.title}
              className="h-full text-center"
            >
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <Icon
                  icon={LucideIcon}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {identity.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {identity.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}