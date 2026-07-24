import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Handshake,
  University,
  Globe,
  Briefcase,
} from "lucide-react";

const opportunities = [
  {
    title: "Academic Partnerships",
    description:
      "Collaborate on interdisciplinary research, publications, conferences, and capacity-building initiatives.",
    icon: University,
  },
  {
    title: "Government Partnerships",
    description:
      "Work with NICRG to strengthen evidence-informed policymaking and institutional development.",
    icon: Briefcase,
  },
  {
    title: "International Collaboration",
    description:
      "Develop cross-border research partnerships addressing regional and global development challenges.",
    icon: Globe,
  },
  {
    title: "Strategic Alliances",
    description:
      "Partner with NICRG to co-create innovative programmes and sustainable development initiatives.",
    icon: Handshake,
  },
];

export default function CollaboratePage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Get Involved"
          title="Collaborate With NICRG"
          description="NICRG welcomes partnerships with universities, governments, industry, civil society, and international organisations."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Partnership Opportunities"
          title="Building Knowledge Together"
          description="Collaboration is central to our mission of advancing interdisciplinary research and societal impact."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {opportunities.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>
    </>
  );
}