import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import PublicationSeriesCard from "./PublicationSeriesCard";

const series = [
  {
    title: "Research Monographs",
    description:
      "Comprehensive investigations into complex national and regional issues.",
  },
  {
    title: "Policy Insights",
    description:
      "Short evidence-based recommendations supporting public decision-making.",
  },
  {
    title: "Innovation Reports",
    description:
      "Emerging ideas, technologies, and interdisciplinary research findings.",
  },
];

export default function PublicationSeries() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Publication Series"
        title="Signature Knowledge Collections"
        description="NICRG organizes publications into thematic series that support continuous learning and evidence-based action."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {series.map((item) => (
          <PublicationSeriesCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </Section>
  );
}