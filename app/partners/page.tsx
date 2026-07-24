import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  GraduationCap,
  Building2,
  Globe2,
  Landmark,
} from "lucide-react";

const partners = [
  {
    title: "Academic Institutions",
    icon: GraduationCap,
    description:
      "NICRG collaborates with universities, research institutes, and academic centres to advance interdisciplinary scholarship and research excellence.",
  },
  {
    title: "Government & Public Sector",
    icon: Landmark,
    description:
      "We work with public institutions to strengthen evidence-informed policymaking, governance, and sustainable development.",
  },
  {
    title: "International Organizations",
    icon: Globe2,
    description:
      "NICRG welcomes partnerships with regional and global organizations addressing Africa's development priorities.",
  },
  {
    title: "Industry & Civil Society",
    icon: Building2,
    description:
      "We collaborate with private sector organizations, NGOs, foundations, and community partners to create measurable societal impact.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Strategic Partnerships"
          title="Building Partnerships That Create Impact"
          description="NICRG believes transformational research is strengthened through meaningful collaboration across academia, government, industry, and civil society."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Partnership Areas"
          title="Who We Work With"
          description="Our partnerships foster knowledge exchange, innovation, capacity development, and evidence-informed solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <Card key={partner.title}>
                <Icon className="h-10 w-10 text-emerald-700" />

                <h3 className="mt-6 text-2xl font-bold">
                  {partner.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {partner.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="gray">
        <SectionHeader
          badge="Become a Partner"
          title="Let's Build Evidence Together"
          description="NICRG welcomes strategic partnerships that advance research, innovation, and sustainable national development."
        />
      </Section>
    </>
  );
}