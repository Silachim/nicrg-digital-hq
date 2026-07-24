import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import {
  Users,
  GraduationCap,
  Landmark,
  HeartPulse,
  Cpu,
  Leaf,
  ArrowRight,
} from "lucide-react";

const clusters = [
  {
    title: "Education Innovation Cluster",
    icon: GraduationCap,
    description:
      "Advancing research on curriculum, pedagogy, learning sciences, teacher education, educational technology, assessment, and leadership.",
  },
  {
    title: "Governance & Institutions Cluster",
    icon: Landmark,
    description:
      "Supporting evidence-informed governance through institutional reform, accountability, public administration, and democratic development.",
  },
  {
    title: "Health Systems Cluster",
    icon: HeartPulse,
    description:
      "Promoting interdisciplinary research that strengthens healthcare delivery, community health, health policy, and population wellbeing.",
  },
  {
    title: "Artificial Intelligence Cluster",
    icon: Cpu,
    description:
      "Exploring responsible AI, digital transformation, data science, emerging technologies, and digital governance.",
  },
  {
    title: "Sustainability Cluster",
    icon: Leaf,
    description:
      "Addressing climate resilience, environmental sustainability, food security, renewable energy, and resource governance.",
  },
];

export default function ResearchClustersPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Collaborative Research"
          title="Research Clusters"
          description="NICRG Research Clusters bring together scholars from different disciplines to investigate complex societal challenges through collaborative, interdisciplinary research."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Overview"
          title="Connecting Expertise Across Disciplines"
          description="Each research cluster serves as a collaborative platform for knowledge generation, grant development, publication, mentorship, and policy engagement."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <Card key={cluster.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  {cluster.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {cluster.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="slate">
        <SectionHeader
          badge="How Our Clusters Operate"
          title="Building Knowledge Through Collaboration"
          description="NICRG Research Clusters encourage interdisciplinary partnerships between academics, policymakers, practitioners, development organisations, industry, and communities."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Collaborative Research",
            "Joint Publications",
            "Grant Development",
            "Capacity Building",
            "Policy Dialogue",
            "Research Seminars",
            "Student Mentorship",
            "International Partnerships",
          ].map((item) => (
            <Card key={item}>
              <Users className="h-8 w-8 text-emerald-700" />
              <h3 className="mt-5 font-bold">{item}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="primary">
            Join a Research Cluster
          </Badge>

          <h2 className="mt-6 text-4xl font-bold">
            Collaborate With Leading Researchers
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            NICRG welcomes researchers, graduate students, practitioners,
            and institutional partners interested in contributing to
            interdisciplinary research and national development.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Button href="/membership">
              Become a Member
            </Button>

            <Button
              href="/contact"
              variant="secondary"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}