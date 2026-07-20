import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import { organization } from "@/content";

import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Strategic Direction"
        title="Our Vision & Mission"
        description="Our long-term aspiration and enduring purpose guide every research initiative, partnership, and policy engagement."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Vision */}

        <Card className="h-full p-10">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <Eye className="h-7 w-7 text-blue-700" />
          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            Vision
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            {organization.vision}
          </p>
        </Card>

        {/* Mission */}

        <Card className="h-full p-10">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
            <Target className="h-7 w-7 text-emerald-700" />
          </div>

          <h3 className="text-3xl font-bold text-slate-900">
            Mission
          </h3>

          <p className="mt-6 leading-8 text-slate-600">
            {organization.mission}
          </p>
        </Card>
      </div>
    </Section>
  );
}