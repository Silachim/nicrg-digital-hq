import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  BookOpen,
  Library,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const collections = [
  "Research Monographs",
  "Edited Volumes",
  "Academic Textbooks",
  "Policy Books",
  "Institutional Publications",
  "Reference Materials",
];

export default function BooksPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Books & Monographs"
          description="NICRG publishes scholarly books, institutional monographs, edited volumes, textbooks, and evidence-based reference materials that contribute to academic excellence and national development."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Collections"
          title="Featured Book Collections"
          description="Our publications bridge research, policy, education, and practice across multiple disciplines."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((item) => (
            <Card key={item}>
              <BookOpen className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                This collection will showcase high-quality scholarly books
                produced by NICRG researchers and collaborators.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="Publishing Vision"
          title="Building Africa's Knowledge Infrastructure"
          description="NICRG books translate rigorous research into accessible knowledge for researchers, educators, policymakers, and development practitioners."
        />

        <div className="mt-16 text-center">
          <Library className="mx-auto h-14 w-14 text-emerald-600" />

          <p className="mx-auto mt-8 max-w-3xl leading-8 text-slate-600">
            This section will continue expanding into a comprehensive digital
            academic library supporting evidence-informed scholarship across
            Nigeria and Africa.
          </p>

          <div className="mt-10">
            <Button href="/publications">
              Browse Publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}