import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { organization } from "@/content";

import {
  Eye,
  Target,
} from "lucide-react";

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

        <Card className="relative h-full overflow-hidden">
          <div className="p-10 md:p-12">

            <div className="flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Eye className="h-8 w-8" />
              </div>

              <Badge variant="secondary">
                Vision
              </Badge>

            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              {organization.vision}
            </p>

          </div>
        </Card>

        {/* Mission */}

        <Card className="relative h-full overflow-hidden">
          <div className="p-10 md:p-12">

            <div className="flex items-center justify-between">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Target className="h-8 w-8" />
              </div>

              <Badge variant="primary">
                Mission
              </Badge>

            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              {organization.mission}
            </p>

          </div>
        </Card>

      </div>
    </Section>
  );
}