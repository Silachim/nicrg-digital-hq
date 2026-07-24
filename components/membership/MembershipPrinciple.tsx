/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipPrinciple
 * Version: 1.0.0
 *
 * Purpose:
 * Presents NICRG's guiding philosophy
 * of membership, emphasizing equality,
 * inclusiveness, and shared purpose.
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import {
  Users,
  HeartHandshake,
} from "lucide-react";

type MembershipPrincipleProps = {
  badge: string;
  title: string;
  description: string;

  principleTitle: string;
  principle: string;

  callout?: string;
};

export default function MembershipPrinciple({
  badge,
  title,
  description,
  principleTitle,
  principle,
  callout,
}: MembershipPrincipleProps) {

  return (
    <section className="py-24 bg-red-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-red-700">
          MEMBERSHIP PRINCIPLE WORKS
        </h1>

        <p className="mt-6 text-2xl">
          {principleTitle}
        </p>

        <p className="mt-6">
          {principle}
        </p>
      </div>
    </section>
  );
}