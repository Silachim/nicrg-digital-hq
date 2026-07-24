/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceMission
 * Version: 2.0.0
 *
 * Purpose:
 * Presents NICRG's governance philosophy,
 * institutional values, and guiding
 * principles for leadership and decision-
 * making.
 *
 * Used In:
 * • Governance
 * • Institutional Profile
 * • Strategic Plan
 * • Annual Reports
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  ShieldCheck,
  Scale,
  Eye,
  Users,
  Landmark,
  Lightbulb,
} from "lucide-react";

type Principle = {
  title: string;
  description: string;
};

type GovernanceMissionProps = {
  badge: string;
  title: string;
  description: string;
  principles: Principle[];
};

const icons = [
  ShieldCheck,
  Eye,
  Scale,
  Landmark,
  Users,
  Lightbulb,
];

export default function GovernanceMission({
  badge,
  title,
  description,
  principles,
}: GovernanceMissionProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {principles.map((principle, index) => {
          const Icon =
            icons[index % icons.length];

          return (
            <Card
              key={principle.title}
              className="h-full"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon className="h-8 w-8" />
              </div>

              <Badge
                variant="primary"
                className="mt-6"
              >
                Governance Principle
              </Badge>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                {principle.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {principle.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}