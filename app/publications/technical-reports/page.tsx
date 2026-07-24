import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  FileBarChart,
  ClipboardCheck,
  Database,
  ArrowRight,
} from "lucide-react";

const reports = [
  "Research Reports",
  "Evaluation Reports",
  "Monitoring Reports",
  "Institutional Reports",
  "White Papers",
  "Baseline Studies",
];

export default function TechnicalReportsPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Technical Reports"
          description="Comprehensive reports documenting research findings, programme evaluations, institutional assessments, and evidence supporting policy and development."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Collections"
          title="Technical Publications"
          description="NICRG technical reports provide detailed evidence for governments, researchers, development organisations, and practitioners."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reports.map((item) => (
            <Card key={item}>
              <FileBarChart className="h-10 w-10 text-emerald-700" />
              <h3 className="mt-6 text-2xl font-bold">{item}</h3>
              <p className="mt-5 leading-8 text-slate-600">
                High-quality technical documentation supporting evidence-based
                decision making.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <div className="text-center">
          <Database className="mx-auto h-16 w-16 text-emerald-700" />
          <h2 className="mt-8 text-4xl font-bold">
            Evidence You Can Trust
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-600">
            Every report undergoes rigorous quality assurance before publication.
          </p>

          <div className="mt-10">
            <Button href="/publications">
              Browse Repository
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}