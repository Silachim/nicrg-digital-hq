import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  BookOpen,
} from "lucide-react";

import { organization } from "@/content";

export default function OurStory() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Our Story"
        title="Why NICRG Was Established"
        description="The story of an emerging institution committed to transforming research into national development."
      />

      <Card className="relative mx-auto mt-16 max-w-5xl overflow-hidden">
        <div className="p-10 md:p-14">

          <div className="flex items-center justify-between">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <BookOpen className="h-8 w-8" />
            </div>

            <Badge variant="primary">
              Institutional Story
            </Badge>

          </div>

          <h3 className="mt-8 text-3xl font-bold text-slate-900">
            Our Journey
          </h3>

          <p className="mt-8 text-lg leading-9 text-slate-600">
            {organization.foundedStory}
          </p>

        </div>
      </Card>
    </Section>
  );
}