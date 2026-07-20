import { Target, Globe2 } from "lucide-react";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

export default function MissionVision() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Who We Are"
        title="Building Knowledge That Shapes Nigeria's Future"
        description="NICRG is an interdisciplinary research network committed to generating high-quality evidence, fostering innovation, and translating research into practical solutions that improve policy, education, governance, health, technology, and sustainable national development."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {/* Mission */}
        <Card className="bg-slate-50">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
            <Icon
              icon={Target}
              className="text-emerald-700"
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            Our Mission
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            To generate interdisciplinary research that informs public policy,
            strengthens institutions, empowers communities, and drives
            sustainable national development through evidence-based solutions.
          </p>
        </Card>

        {/* Vision */}
        <Card className="bg-slate-50">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <Icon
              icon={Globe2}
              className="text-blue-700"
            />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">
            Our Vision
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            To become Africa&apos;s leading interdisciplinary research institution,
            connecting knowledge, innovation, and policy to transform lives
            and contribute meaningfully to global development.
          </p>
        </Card>

      </div>
    </Section>
  );
}