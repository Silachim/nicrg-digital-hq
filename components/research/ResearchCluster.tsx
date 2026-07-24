import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import { research } from "@/content";

import ResearchClusterCard from "./ResearchClusterCard";

import {
  GraduationCap,
  Shield,
  Cpu,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

const iconMap = {
  graduation: GraduationCap,
  shield: Shield,
  cpu: Cpu,
  briefcase: BriefcaseBusiness,
  users: Users,
};

const colorMap = {
  emerald: "bg-emerald-100 text-emerald-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
};

export default function ResearchClusters() {
  return (
    <Section background="slate">
      <SectionHeader
        badge={research.clusters.badge}
        title={research.clusters.title}
        description={research.clusters.description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {research.clusters.items.map((cluster) => {
          const Icon =
            iconMap[cluster.icon as keyof typeof iconMap];

          const accentColor =
            colorMap[cluster.color as keyof typeof colorMap];

          return (
            <ResearchClusterCard
              key={cluster.title}
              cluster={cluster.title}
              shortName={cluster.short}
              description={cluster.description}
              accentColor={accentColor}
              icon={<Icon className="h-8 w-8" />}
            />
          );
        })}
      </div>
    </Section>
  );
}