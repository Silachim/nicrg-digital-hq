import Link from "next/link";

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

import {
  GraduationCap,
  Handshake,
  LibraryBig,
  Mail,
} from "lucide-react";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Become a Research Member",
    description:
      "Join an interdisciplinary network of researchers committed to generating evidence that advances national and global development.",
    href: "/membership",
  },
  {
    icon: Handshake,
    title: "Partner With NICRG",
    description:
      "Collaborate with us on research, policy, innovation, capacity building, and strategic initiatives.",
    href: "/partnerships",
  },
  {
    icon: LibraryBig,
    title: "Explore Research Resources",
    description:
      "Access research outputs, frameworks, publications, policy briefs, and knowledge resources.",
    href: "/research",
  },
  {
    icon: Mail,
    title: "Stay Connected",
    description:
      "Subscribe to receive research updates, events, opportunities, and institutional news.",
    href: "/contact",
  },
];

export default function JoinNetwork() {
  return (
    <Section background="emerald">
      <SectionHeader
        badge="Join NICRG"
        title="Become Part of Our Knowledge Community"
        description="Whether you are a researcher, policymaker, educator, student, institution, or development partner, there is a place for you within the NICRG ecosystem."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {opportunities.map((item) => (
          <Card
            key={item.title}
            className="flex h-full flex-col justify-between"
          >
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <Icon
                  icon={item.icon}
                  className="text-emerald-700"
                />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {item.description}
              </p>
            </div>

            <div className="mt-8">
              <Link href={item.href}>
                <Button variant="secondary">
                  Learn More
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}