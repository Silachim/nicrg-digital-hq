import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  Globe,
  Presentation,
  Users,
} from "lucide-react";

const events = [
  "Annual Conference",
  "Policy Dialogue",
  "Research Symposium",
  "Executive Roundtable",
  "Innovation Summit",
  "Regional Workshops",
];

export default function ConferencesPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="Programmes"
          title="Conferences & Events"
          description="NICRG creates platforms for scholarly dialogue, knowledge exchange, innovation, and policy engagement."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Academic Engagement"
          title="Convening Ideas that Matter"
          description="Our conferences promote interdisciplinary collaboration and evidence-informed development."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <Card key={event}>
              <Presentation className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-xl font-bold">
                {event}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Bringing together researchers, governments, development
                partners, civil society, and industry.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}