import Container from "@/components/common/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import { roadmap } from "@/content";

import {
  Flag,
  Rocket,
  Building2,
} from "lucide-react";

const iconMap = {
  emerald: Flag,
  blue: Rocket,
  purple: Building2,
};

export default function Roadmap() {
  return (
    <Section background="white">
      <Container>

        <SectionHeader
          badge="Institutional Roadmap"
          title="A Deliberate Path Toward National Impact"
          description="NICRG's development follows a phased implementation strategy that strengthens governance, expands research capacity, and lays the foundation for long-term institutional sustainability."
        />

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-slate-200 lg:block" />

          <div className="space-y-12">

            {roadmap.map((phase) => {

              const Icon = iconMap[
                phase.color as keyof typeof iconMap
              ];

              return (

                <div
                  key={phase.phase}
                  className="relative flex gap-8"
                >

                  <div className="relative z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-white shadow lg:flex">

                    <Icon className="h-8 w-8 text-emerald-700" />

                  </div>

                  <Card className="flex-1 p-10">

                    <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                      {phase.phase}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold">
                      {phase.title}
                    </h3>

                    <p className="mt-2 font-medium text-slate-500">
                      {phase.period}
                    </p>

                    <ul className="mt-8 space-y-3">

                      {phase.milestones.map((item) => (

                        <li
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <div className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />

                          <span className="text-slate-600">
                            {item}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </Card>

                </div>

              );

            })}

          </div>

        </div>

      </Container>
    </Section>
  );
}