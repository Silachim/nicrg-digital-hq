import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import FeaturedNewsCard from "./FeaturedNewsCard";

import { featuredStory } from "@/content/news";

export default function FeaturedNews() {
  return (
    <Section background="white">
      <SectionHeader
        badge="Featured Story"
        title="Institutional Highlights"
        description="Major announcements and milestones shaping NICRG's growth."
      />

      <div className="mt-16">
        <FeaturedNewsCard {...featuredStory} />
      </div>
    </Section>
  );
}