import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const partners = [
  "Universities",
  "Government Agencies",
  "Research Institutes",
  "Development Partners",
  "Private Sector",
  "Civil Society",
];

export default function Partners() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Collaboration"
        title="Building Partnerships That Create Lasting Impact"
        description="NICRG believes that solving complex societal challenges requires strong collaboration across institutions, disciplines, and sectors."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {partners.map((partner) => (
          <Card
            key={partner}
            className="flex h-44 flex-col items-center justify-center text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-slate-300 bg-slate-50">
              <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                LOGO
              </span>
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              {partner}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Partnership opportunities coming soon.
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}