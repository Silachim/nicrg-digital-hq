import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Award,
  GraduationCap,
  Users,
} from "lucide-react";

const fellowships = [
  "Doctoral Fellows",
  "Postdoctoral Fellows",
  "Policy Fellows",
  "Visiting Scholars",
  "Research Associates",
  "International Fellows",
];

export default function FellowshipsPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Programmes"
          title="Research Fellowships"
          description="Supporting outstanding scholars through collaborative research, mentorship, and interdisciplinary innovation."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Opportunities"
          title="Future Fellowship Programmes"
          description="NICRG is developing competitive fellowship programmes supporting African and international scholars."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fellowships.map((item) => (
            <Card key={item}>
              <Award className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-xl font-bold">
                {item}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Fellowship opportunities will foster interdisciplinary research,
                leadership, and global collaboration.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}