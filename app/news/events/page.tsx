import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

import {
  CalendarDays,
  Users,
  Presentation,
} from "lucide-react";

const events = [
  "Research Conferences",
  "Policy Dialogues",
  "Capacity Building Workshops",
  "Public Lectures",
  "Stakeholder Roundtables",
  "Community Engagement Events",
];

export default function EventsPage() {
  return (
    <>
      <Section background="emerald">
        <SectionHeader
          badge="News & Media"
          title="Events"
          description="Explore upcoming and past NICRG conferences, workshops, seminars, and public engagement activities."
        />
      </Section>

      <Section background="white">
        <SectionHeader
          badge="Institutional Events"
          title="Connecting Research with Society"
          description="NICRG events create opportunities for collaboration, learning, and knowledge exchange."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <Card key={event}>
              <CalendarDays className="h-10 w-10 text-emerald-700" />

              <h3 className="mt-6 text-xl font-bold">
                {event}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Details of upcoming and completed institutional events will
                appear here.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}