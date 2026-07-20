import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import NetworkBackground from "@/components/knowledge/NetworkBackground";
import NetworkNode from "@/components/ui/NetworkNode";

import {
  GraduationCap,
  Users,
  Landmark,
  Building2,
  Globe2,
  Handshake,
} from "lucide-react";

const nodes = [
  {
    icon: GraduationCap,
    title: "Universities",
  },
  {
    icon: Users,
    title: "Researchers",
  },
  {
    icon: Landmark,
    title: "Government",
  },
  {
    icon: Building2,
    title: "Industry",
  },
  {
    icon: Globe2,
    title: "Development Partners",
  },
  {
    icon: Handshake,
    title: "Communities",
  },
];

export default function KnowledgeNetwork() {
  return (
    <Section
      background="slate"
      decoration={<NetworkBackground />}
    >
      <SectionHeader
        badge="Knowledge Network"
        title="Connecting Knowledge Across Sectors"
        description="NICRG creates an ecosystem where researchers, policymakers, educators, industry leaders, development partners, and communities collaborate to solve complex national challenges through interdisciplinary research and evidence-informed innovation."
      />

      <div className="mx-auto mt-8 max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-600">
          We believe transformative research happens through collaboration.
          Our network bridges disciplines, institutions, and sectors to turn
          knowledge into meaningful societal impact.
        </p>
      </div>

      <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((node) => (
          <NetworkNode
            key={node.title}
            icon={node.icon}
            title={node.title}
          />
        ))}
      </div>
    </Section>
  );
}