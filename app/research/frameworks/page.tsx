import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  Network,
  GraduationCap,
  Landmark,
  Cpu,
  Leaf,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const frameworks = [
  {
    title: "Educational Frameworks",
    icon: GraduationCap,
    description:
      "Evidence-informed models supporting curriculum design, assessment, teacher development, learning sciences, and educational leadership.",
  },
  {
    title: "Governance Frameworks",
    icon: Landmark,
    description:
      "Frameworks promoting institutional strengthening, accountability, transparency, public administration, and policy implementation.",
  },
  {
    title: "Artificial Intelligence Frameworks",
    icon: Cpu,
    description:
      "Responsible AI adoption, digital governance, ethical AI implementation, and technology policy frameworks.",
  },
  {
    title: "Health Frameworks",
    icon: HeartPulse,
    description:
      "Research-informed approaches to healthcare systems, public health interventions, and community wellbeing.",
  },
  {
    title: "Sustainability Frameworks",
    icon: Leaf,
    description:
      "Integrated models supporting climate resilience, environmental governance, renewable energy, and sustainable development.",
  },
];

const process = [
  "Research Evidence",
  "Stakeholder Consultation",
  "Expert Review",
  "Framework Design",
  "Pilot Testing",
  "Validation",
  "Publication",
  "Implementation Support",
];

export default function ResearchFrameworksPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Knowledge Frameworks"
          title="Research Frameworks"
          description="NICRG develops evidence-informed frameworks that translate academic research into practical tools for governments, institutions, educators, communities, industry, and development organisations."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Overview"
          title="Bridging Research and Practice"
          description="Our frameworks transform rigorous research into practical implementation models that enable organisations to adopt evidence-based policies, systems, and interventions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {frameworks.map((framework) => {
            const Icon = framework.icon;

            return (
              <Card key={framework.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  {framework.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {framework.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="Development Process"
          title="How NICRG Frameworks are Developed"
          description="Every framework undergoes a rigorous interdisciplinary process to ensure scientific quality, practical relevance, and stakeholder acceptance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {process.map((step) => (
            <Card key={step}>
              <Network className="h-8 w-8 text-emerald-700" />

              <h3 className="mt-5 text-lg font-bold">
                {step}
              </h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="primary">
            Framework Collaboration
          </Badge>

          <h2 className="mt-6 text-4xl font-bold">
            Develop the Next Generation of Evidence-Based Frameworks
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            NICRG welcomes partnerships with universities, ministries,
            development agencies, foundations, and industry leaders to
            co-develop frameworks that strengthen institutions and improve
            public outcomes.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Button href="/contact">
              Collaborate With Us
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