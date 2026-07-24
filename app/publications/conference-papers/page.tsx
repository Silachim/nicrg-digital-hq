import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  Presentation,
  Globe,
  Users,
  ArrowRight,
} from "lucide-react";

const conferences = [
  "International Conferences",
  "Regional Conferences",
  "Symposia",
  "Workshops",
  "Proceedings",
  "Poster Presentations",
];

export default function ConferencePapersPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Conference Papers"
          description="Scholarly presentations, proceedings, abstracts, and conference papers presented by NICRG researchers worldwide."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Academic Engagement"
          title="Conference Contributions"
          description="NICRG actively contributes to national and international scholarly conversations."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {conferences.map((item) => (
            <Card key={item}>
              <Presentation className="h-10 w-10 text-emerald-700" />
              <h3 className="mt-6 text-2xl font-bold">{item}</h3>
              <p className="mt-5 leading-8 text-slate-600">
                Conference presentations promoting interdisciplinary scholarship.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <div className="text-center">
          <Globe className="mx-auto h-16 w-16 text-emerald-700" />

          <h2 className="mt-8 text-4xl font-bold">
            Sharing Knowledge Globally
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
            Our researchers regularly present findings at leading conferences
            across Africa and the world.
          </p>

          <Button href="/publications" className="mt-10">
            View Publications
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}