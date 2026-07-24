/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationsFeatured
 * Version: 2.0.0
 *
 * Purpose:
 * Displays NICRG's featured publications
 * using reusable FeaturedPublicationCard
 * components.
 *
 * Used In:
 * • Publications Page
 * • Research Showcase
 * • Home Page
 * • Knowledge Repository
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import FeaturedPublicationCard from "./FeaturedPublicationCard";

type FeaturedPublication = {
  title: string;

  authors: string;

  journal: string;

  year: string;

  summary: string;

  href?: string;
};

type PublicationFeaturedProps = {
  badge: string;

  title: string;

  description: string;

  publications: FeaturedPublication[];
};

export default function PublicationFeatured({
  badge,
  title,
  description,
  publications,
}: PublicationFeaturedProps) {
  return (
    <Section background="white">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
  {(publications ?? []).map((publication, index) => (
    <FeaturedPublicationCard
      key={`${publication.title}-${index}`}
      {...publication}
    />
  ))}
</div>

    </Section>
  );
}