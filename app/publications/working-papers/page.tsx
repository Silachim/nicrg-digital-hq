import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  FileClock,
  Lightbulb,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

const papers = [
  "Research in Progress",
  "Discussion Papers",
  "Concept Papers",
  "Preprints",
  "Pilot Studies",
  "Emerging Ideas",
];

export default function WorkingPapersPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Working Papers"
          description="Preliminary research outputs encouraging scholarly discussion, collaboration, and continuous improvement before formal publication."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Research Pipeline"
          title="Ideas Under Development"
          description="Working papers provide early access to emerging research while encouraging scholarly dialogue."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {papers.map((item) => (
            <Card key={item}>
              <FlaskConical className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-2xl font-bold">
                {item}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Early-stage research supporting collaboration and innovation.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <div className="text-center">
          <Lightbulb className="mx-auto h-16 w-16 text-emerald-700" />

          <h2 className="mt-8 text-4xl font-bold">
            From Ideas to Impact
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
            Working papers accelerate knowledge exchange while strengthening
            future peer-reviewed scholarship.
          </p>

          <Button href="/publications" className="mt-10">
            View Repository
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}