import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import NetworkBackground from "@/components/knowledge/NetworkBackground";
import {
  GraduationCap,
  HeartPulse,
  Leaf,
  BriefcaseBusiness,
  Landmark,
  Cpu,
  ArrowRight,
} from "lucide-react";

const clusters = [
  {
    icon: GraduationCap,
    title: "Education & Human Development",
    description:
      "Advancing learning, curriculum innovation, teacher education, educational technology, lifelong learning, and youth development.",
  },
  {
    icon: HeartPulse,
    title: "Health & Well-being",
    description:
      "Strengthening healthcare systems, public health, mental health, community health, and health policy through interdisciplinary research.",
  },
  {
    icon: Leaf,
    title: "Environment & Sustainability",
    description:
      "Supporting climate resilience, renewable energy, environmental conservation, food security, and sustainable development.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Economy & Entrepreneurship",
    description:
      "Driving innovation, SME growth, entrepreneurship, financial inclusion, productivity, and economic transformation.",
  },
  {
    icon: Landmark,
    title: "Governance & Public Policy",
    description:
      "Promoting transparent institutions, democratic governance, public administration, security, and evidence-informed policymaking.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation & Artificial Intelligence",
    description:
      "Exploring AI, data science, digital innovation, cybersecurity, emerging technologies, and digital inclusion.",
  },
];

export default function ResearchClusters() {
  return (
    <Section
  background="white"
  decoration={<NetworkBackground />}
>
      <SectionHeader
        badge="Research Clusters"
        title="Research Organized Around National Priorities"
        description="NICRG brings together experts from diverse disciplines to address complex societal challenges through collaborative, evidence-informed research."
      />

      <div className="mx-auto mt-8 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          Our interdisciplinary research is organized around Nigeria's most
          pressing development priorities, ensuring that knowledge generation
          leads to practical solutions with measurable impact.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {clusters.map((cluster) => (
          <Card key={cluster.title}>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <Icon
                icon={cluster.icon}
                className="text-emerald-700"
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              {cluster.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {cluster.description}
            </p>

            <button
              className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-700 transition hover:text-emerald-800"
            >
              Learn More
              <Icon icon={ArrowRight} size={18} />
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}