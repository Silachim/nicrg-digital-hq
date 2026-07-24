/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationsRepository
 * Version: 1.0.0
 *
 * Purpose:
 * Displays the institutional publication
 * repository using reusable publication
 * cards.
 *
 * --------------------------------------------------------
 */

import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

import PublicationCard from "./PublicationCard";

type RepositoryPublication = {
  title: string;

  authors: string;

  type: string;

  journal: string;

  year: string;

  researchArea: string;

  href?: string;
};

type PublicationRepositoryProps = {
  badge: string;

  title: string;

  description: string;

  publications: RepositoryPublication[];
};

export default function PublicationRepository({
  badge,
  title,
  description,
  publications,
}: PublicationRepositoryProps) {
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