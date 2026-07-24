import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  HeartHandshake,
  GraduationCap,
  BookOpen,
  Building2,
} from "lucide-react";

const priorities = [
  "Research Grants",
  "Student Scholarships",
  "Capacity Building",
  "Knowledge Infrastructure",
];

export default function DonatePage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Get Involved"
          title="Support Our Mission"
          description="Your support enables NICRG to conduct independent research, strengthen institutions, and promote sustainable development."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Giving Priorities"
          title="Where Your Support Makes a Difference"
          description="Future donations will directly strengthen research excellence and societal impact."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {priorities.map((item) => (
            <Card key={item}>
              <HeartHandshake className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-xl font-bold">
                {item}
              </h3>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}