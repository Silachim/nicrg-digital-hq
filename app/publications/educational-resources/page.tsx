import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  GraduationCap,
  BookMarked,
  School,
  ArrowRight,
} from "lucide-react";

const resources = [
  "Curriculum Guides",
  "Teaching Manuals",
  "Learning Toolkits",
  "Training Resources",
  "Assessment Materials",
  "Open Educational Resources",
];

export default function EducationalResourcesPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Educational Resources"
          description="Evidence-based educational materials supporting teachers, researchers, institutions, and lifelong learners."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Learning Resources"
          title="Supporting Education Through Research"
          description="NICRG develops practical educational resources translating research into teaching and learning."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <Card key={item}>
              <GraduationCap className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Educational materials supporting professional learning and
                instructional excellence.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <div className="text-center">
          <School className="mx-auto h-16 w-16 text-emerald-700" />

          <h2 className="mt-8 text-4xl font-bold">
            Learning Beyond the Classroom
          </h2>

          <Button href="/publications" className="mt-10">
            Explore Resources
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}