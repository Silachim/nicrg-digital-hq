import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import NewsCard from "./NewsCard";

import { latestNews } from "@/content/news";
export default function LatestNews() {
  return (
    <Section background="slate">
      <SectionHeader
        badge="Latest Updates"
        title="Recent News"
        description="The latest institutional announcements, opportunities, and activities."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {latestNews.map((item) => (
          <NewsCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </Section>
  );
}