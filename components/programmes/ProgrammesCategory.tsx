/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesCategory
 * Version: 2.0.0
 *
 * Purpose:
 * Displays NICRG programme categories
 * using reusable ProgrammesCategoryCard
 * components.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import ProgrammesCategoryCard from "./ProgrammesCategoryCard";

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

type Category = {
  title: string;

  description: string;

  icon?: keyof typeof iconMap;

  href?: string;
};

type ProgrammesCategoryProps = {
  badge: string;

  title: string;

  description: string;

  categories: Category[];
};

export default function ProgrammesCategory({
  badge,
  title,
  description,
  categories,
}: ProgrammesCategoryProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon
            ? iconMap[category.icon] ?? undefined
            : undefined;

          return (
            <ProgrammesCategoryCard
              key={`${category.title}-${index}`}
              title={category.title}
              description={category.description}
              href={category.href}
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