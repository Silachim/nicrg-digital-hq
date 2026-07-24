/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesFeature
 * Version: 2.0.0
 *
 * Purpose:
 * Displays NICRG flagship programmes
 * using reusable ProgrammesFeatureCard
 * components.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ProgrammesFeatureCard from "./ProgrammesFeatureCard";

import {
  GraduationCap,
  Globe,
  BookOpen,
  Users,
  Landmark,
  Handshake,
  Microscope,
} from "lucide-react";

const iconMap = {
  microscope: Microscope,
  graduation: GraduationCap,
  globe: Globe,
  book: BookOpen,
  users: Users,
  landmark: Landmark,
  handshake: Handshake,
} as const;

type Feature = {
  title: string;

  description: string;

  category: string;

  icon?: keyof typeof iconMap;

  href?: string;
};

type ProgrammesFeatureProps = {
  badge: string;

  title: string;

  description: string;

  features: Feature[];
};

export default function ProgrammesFeature({
  badge,
  title,
  description,
  features,
}: ProgrammesFeatureProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
            ? iconMap[feature.icon] ?? undefined
            : undefined;

          return (
            <ProgrammesFeatureCard
              key={`${feature.title}-${index}`}
              title={feature.title}
              description={feature.description}
              category={feature.category}
              href={feature.href}
              icon={
                Icon ? (
                  <Icon className="h-8 w-8" />
                ) : undefined
              }
            />
          );
        })}
      </div>
    </Section>
  );
}