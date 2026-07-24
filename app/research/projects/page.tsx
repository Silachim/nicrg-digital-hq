import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  FolderKanban,
  Calendar,
  Users,
  Landmark,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Education Transformation",
    status: "Ongoing",
    description:
      "Improving educational quality through curriculum innovation, teacher professional development, educational technology, and policy research.",
  },
  {
    title: "Governance and Institutional Reform",
    status: "Ongoing",
    description:
      "Supporting transparent governance, institutional accountability, leadership development, and evidence-informed public policy.",
  },
  {
    title: "Digital Innovation for Development",
    status: "Developing",
    description:
      "Investigating artificial intelligence, digital governance, and technology-enabled solutions for sustainable development.",
  },
];

export default function ResearchProjectsPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Research Projects"
          title="Transforming Research into Real-World Impact"
          description="NICRG manages interdisciplinary research projects that address national priorities while generating practical solutions for policymakers, educators, institutions, communities, and development partners."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Current Portfolio"
          title="Featured Research Projects"
          description="Our projects integrate rigorous academic research with stakeholder engagement and practical implementation."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <FolderKanban className="h-10 w-10 text-emerald-700" />

              <div className="mt-5">
                <Badge variant="primary">
                  {project.status}
                </Badge>
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {project.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="Project Lifecycle"
          title="Our Research Process"
          description="NICRG follows a structured process that ensures scientific rigour, stakeholder participation, and policy relevance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Problem Identification",
            "Research Design",
            "Data Collection",
            "Analysis",
            "Knowledge Translation",
            "Policy Engagement",
            "Publication",
            "Community Impact",
          ].map((stage) => (
            <Card key={stage}>
              <Calendar className="h-8 w-8 text-emerald-700" />
              <h3 className="mt-5 font-bold">{stage}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Partnerships"
          title="Working Together for Greater Impact"
          description="NICRG collaborates with universities, government agencies, civil society organisations, international institutions, and industry partners to implement high-impact research."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Card>
            <Users className="h-10 w-10 text-emerald-700" />
            <h3 className="mt-5 text-xl font-bold">
              Academic Partnerships
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Collaborating with universities and research institutes.
            </p>
          </Card>

          <Card>
            <Landmark className="h-10 w-10 text-emerald-700" />
            <h3 className="mt-5 text-xl font-bold">
              Government Collaboration
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Supporting evidence-informed governance and policymaking.
            </p>
          </Card>

          <Card>
            <FolderKanban className="h-10 w-10 text-emerald-700" />
            <h3 className="mt-5 text-xl font-bold">
              Development Partners
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Working alongside development organisations to deliver
              sustainable impact.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="emerald">
        <div className="mx-auto max-w-3xl text-center text-white">
          <Badge variant="secondary">
            Collaborate on Research
          </Badge>

          <h2 className="mt-6 text-4xl font-bold">
            Partner With NICRG
          </h2>

          <p className="mt-6 text-lg leading-8 text-emerald-100">
            We welcome collaborative research proposals, funding
            partnerships, interdisciplinary projects, and institutional
            cooperation that advance evidence-informed solutions for
            sustainable development.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Button href="/contact">
              Start a Collaboration
            </Button>

            <Button
              href="/research/repository"
              variant="secondary"
            >
              Browse Repository
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}