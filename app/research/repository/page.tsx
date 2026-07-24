import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  Database,
  BookOpen,
  FileText,
  GraduationCap,
  FolderArchive,
  Search,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const collections = [
  {
    title: "Journal Articles",
    icon: BookOpen,
  },
  {
    title: "Books & Monographs",
    icon: GraduationCap,
  },
  {
    title: "Policy Briefs",
    icon: FileText,
  },
  {
    title: "Technical Reports",
    icon: FolderArchive,
  },
  {
    title: "Working Papers",
    icon: Database,
  },
  {
    title: "Conference Proceedings",
    icon: Search,
  },
];

const principles = [
  "Open Knowledge",
  "Research Integrity",
  "Digital Preservation",
  "Knowledge Accessibility",
  "Responsible Data Management",
  "Evidence-informed Decision Making",
];

export default function RepositoryPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Institutional Repository"
          title="NICRG Research Repository"
          description="The NICRG Research Repository preserves, showcases, and disseminates scholarly outputs produced by researchers affiliated with the Nigerian Interdisciplinary Critical Research Group."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Repository Collections"
          title="Knowledge Collections"
          description="The repository provides organised access to research outputs that support scholarship, policymaking, education, innovation, and sustainable development."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((collection) => {
            const Icon = collection.icon;

            return (
              <Card key={collection.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  {collection.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  Browse curated scholarly resources within this collection.
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="Repository Principles"
          title="Built on Research Integrity"
          description="NICRG is committed to preserving high-quality scholarly outputs while ensuring accessibility, transparency, and responsible knowledge dissemination."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle}>
              <ShieldCheck className="h-8 w-8 text-emerald-700" />

              <h3 className="mt-5 text-xl font-bold">
                {principle}
              </h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Future Repository"
          title="Looking Ahead"
          description="The NICRG Repository will continue evolving into a comprehensive digital knowledge infrastructure supporting global scholarly communication."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <ul className="space-y-4 text-slate-600 leading-8">
              <li>• DOI integration</li>
              <li>• ORCID synchronization</li>
              <li>• Citation export (APA, MLA, Chicago, BibTeX)</li>
              <li>• Download analytics</li>
              <li>• Author profiles</li>
            </ul>
          </Card>

          <Card>
            <ul className="space-y-4 text-slate-600 leading-8">
              <li>• AI-powered search</li>
              <li>• Institutional metrics</li>
              <li>• Open datasets</li>
              <li>• Multimedia repository</li>
              <li>• Long-term digital preservation</li>
            </ul>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button href="/publications">
            Explore Publications
          </Button>

          <Button
            href="/contact"
            variant="secondary"
            className="ml-4"
          >
            Repository Support
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}