/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationRelated
 * Version: 2.0.0
 *
 * Purpose:
 * Displays publications related to
 * the current publication to encourage
 * further exploration of similar research.
 *
 * Used In:
 * • Publication Details
 * • Digital Repository
 * • Knowledge Discovery
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import PublicationCard from "./PublicationCard";

type RelatedPublication = {
  title: string;

  authors: string;

  type?: string;

  journal: string;

  year: string;

  researchArea: string;

  href?: string;
};

type PublicationRelatedProps = {
  badge: string;

  title: string;

  description: string;

  publications: RelatedPublication[];
};

export default function PublicationRelated({
  badge,
  title,
  description,
  publications,
}: PublicationRelatedProps) {
  return (
    <Section background="slate">
      <SectionHeader
        badge={badge}
        title={title}
        description={description}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {publications.map((publication, index) => (
          <PublicationCard
            key={`${publication.title}-${index}`}
            {...publication}
          />
        ))}
      </div>
    </Section>
  );
}