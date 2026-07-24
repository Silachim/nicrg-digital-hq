import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import {
  FileText,
  Microscope,
  Award,
  ArrowRight,
} from "lucide-react";

const categories = [
  "Peer-Reviewed Articles",
  "Open Access Publications",
  "International Journals",
  "National Journals",
  "Systematic Reviews",
  "Empirical Research",
];

export default function JournalArticlesPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Hub"
          title="Journal Articles"
          description="Explore peer-reviewed journal publications produced by NICRG researchers across education, governance, health, innovation, sustainability, and interdisciplinary scholarship."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Research Outputs"
          title="Scholarly Publications"
          description="NICRG promotes rigorous, ethical, and impactful research published in reputable academic journals."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Card key={category}>
              <Microscope className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-2xl font-bold">
                {category}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                Discover research contributing to scientific knowledge,
                innovation, and evidence-informed decision making.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="Quality"
          title="Commitment to Research Excellence"
          description="Every publication reflects NICRG's commitment to rigorous methodology, ethical scholarship, interdisciplinary collaboration, and societal impact."
        />

        <div className="mt-14 flex justify-center">
          <Award className="h-16 w-16 text-emerald-700" />
        </div>

        <div className="mt-10 text-center">
          <Button href="/publications">
            View Publication Repository
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}