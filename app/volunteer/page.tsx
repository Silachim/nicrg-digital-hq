import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Users,
  GraduationCap,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const roles = [
  {
    title: "Research Assistants",
    description:
      "Support research projects, literature reviews, and data collection.",
  },
  {
    title: "Programme Volunteers",
    description:
      "Assist during conferences, workshops, training programmes, and outreach activities.",
  },
  {
    title: "Student Volunteers",
    description:
      "Gain practical research experience while contributing to institutional initiatives.",
  },
  {
    title: "Professional Mentors",
    description:
      "Share expertise with early-career researchers and young professionals.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Get Involved"
          title="Volunteer With NICRG"
          description="Become part of a growing community committed to research excellence and national development."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Volunteer Opportunities"
          title="Contribute Your Skills"
          description="NICRG values professionals, researchers, students, and practitioners who wish to support our mission."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {roles.map((role) => (
            <Card key={role.title}>
              <Users className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-2xl font-bold">
                {role.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {role.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}