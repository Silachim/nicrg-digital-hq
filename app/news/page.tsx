import {
  NewsHero,
  FeaturedNews,
  LatestNews,
} from "@/components/news";

export default function NewsPage() {
  return (
    <>
      <NewsHero />

      <FeaturedNews />

      <LatestNews />
    </>
  );
}