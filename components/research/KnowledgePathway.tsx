import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import { research } from "@/content";

import {
  Search,
  Microscope,
  FileText,
  Landmark,
  Target,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  search: Search,
  microscope: Microscope,
  file: FileText,
  landmark: Landmark,
  target: Target,
};

export default function KnowledgePathway() {
  return (
    <Section background="white">
      <SectionHeader
        badge={research.pathway.badge}
        title={research.pathway.title}
        description={research.pathway.description}
      />

      <div className="mt-20 grid gap-8 lg:grid-cols-5">
        {research.pathway.steps.map((step, index) => {
          const Icon =
            iconMap[step.icon as keyof typeof iconMap];

          return (
            <div
              key={step.number}
              className="relative"
            >
              <Card className="group h-full p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <Icon className="h-8 w-8 text-emerald-700" />
                </div>

                <p className="mt-6 text-sm font-bold tracking-widest text-emerald-700">
                  STEP {step.number}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>
              </Card>

              {index < research.pathway.steps.length - 1 && (
                <ArrowRight className="absolute -right-7 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-emerald-300 xl:block" />
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}