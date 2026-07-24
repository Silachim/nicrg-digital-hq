import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Brain,
  Database,
  Cpu,
  PenTool,
} from "lucide-react";

const trainings = [
  "Research Methods",
  "Data Analytics",
  "Artificial Intelligence",
  "Grant Writing",
  "Academic Publishing",
  "Monitoring & Evaluation",
];

export default function TrainingPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Programmes"
          title="Professional Training"
          description="NICRG delivers evidence-based professional development programmes for researchers, practitioners, and policymakers."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Training Areas"
          title="Current Learning Portfolio"
          description="Designed to strengthen professional competence and institutional performance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {trainings.map((item) => (
            <Card key={item}>
              <Brain className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-xl font-bold">
                {item}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Practical, evidence-informed learning experiences supporting
                professional growth.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}