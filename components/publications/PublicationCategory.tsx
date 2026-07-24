import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import PublicationCategoryCard from "./PublicationCategoryCard";

const categories = [
  {
    title: "Journal Articles",
    description:
      "Peer-reviewed scholarly articles advancing interdisciplinary knowledge.",
  },
  {
    title: "Policy Briefs",
    description:
      "Evidence-informed recommendations for policymakers and institutions.",
  },
  {
    title: "Technical Reports",
    description:
      "Comprehensive research findings addressing national priorities.",
  },
  {
    title: "Working Papers",
    description:
      "Early-stage research encouraging collaboration and scholarly dialogue.",
  },
];

export default function PublicationCategories() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Publication Categories"
        title="Diverse Research Outputs"
        description="NICRG disseminates knowledge through multiple publication formats designed for researchers, policymakers, practitioners, and communities."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <PublicationCategoryCard
            key={category.title}
            {...category}
          />
        ))}
      </div>
    </Section>
  );
}