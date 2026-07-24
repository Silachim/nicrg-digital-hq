/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Page
 * Publications
 *
 * Purpose:
 * Presents NICRG's scholarly publications,
 * institutional repository, research
 * collections, knowledge resources,
 * publication metrics, and research impact.
 *
 * --------------------------------------------------------
 */

import {
  PublicationHero,
  PublicationOverview,
  PublicationFeatured,
  PublicationLibrary,
  PublicationSearch,
  PublicationFilters,
  PublicationCollections,
  PublicationStatistics,
  PublicationImpact,
  PublicationTimeline,
  PublicationCTA,
  PublicationMetrics,
  PublicationAuthor,
  PublicationCitation,
  PublicationDownloads,
  PublicationResearchArea,
  PublicationRelated,
} from "@/components/publications";

import { publications } from "@/content";

export default function PublicationsPage() {
  console.log(publications.statistics);
console.log(publications.statistics.statistics);
    return (
    <>
      {/* Hero */}

      <PublicationHero
        badge={publications.hero.badge}
        title={publications.hero.title}
        description={publications.hero.description}
        primaryButton={publications.hero.primaryButton}
        secondaryButton={publications.hero.secondaryButton}
      />

      {/* Overview */}

      <PublicationOverview
        badge={publications.overview.badge}
        title={publications.overview.title}
        description={publications.overview.description}
        categories={publications.overview.categories}
      />

      {/* Featured Publication */}

      <PublicationFeatured
        badge={publications.featured.badge}
        title={publications.featured.title}
        description={publications.featured.description}
        publication={publications.featured.publication}
      />

      {/* Repository Search */}

      <PublicationSearch
        placeholder={publications.search.placeholder}
      />

      {/* Filters */}

      <PublicationFilters
        filters={publications.filters}
      />

      {/* Publication Library */}

      <PublicationLibrary
        badge={publications.library.badge}
        title={publications.library.title}
        description={publications.library.description}
        publications={publications.library.publications}
      />

      {/* Collections */}

      <PublicationCollections
        badge={publications.collections.badge}
        title={publications.collections.title}
        description={publications.collections.description}
        collections={publications.collections.collections}
      />

      {/* Publication Metrics */}

      <PublicationMetrics
    title={publications.metrics.title}
    description={publications.metrics.description}
    metrics={publications.metrics.metrics}
/>

      {/* Featured Author */}

      <PublicationAuthor
        name={publications.author.name}
        affiliation={publications.author.affiliation}
        role={publications.author.role}
        publications={publications.author.publications}
        biography={publications.author.biography}
        href={publications.author.href}
      />

      {/* Citation */}

      <PublicationCitation
        apa={publications.citation.apa}
        mla={publications.citation.mla}
        chicago={publications.citation.chicago}
        doi={publications.citation.doi}
      />

      {/* Downloads */}

      <PublicationDownloads
        files={publications.downloads.files}
      />

      {/* Research Area */}

      <PublicationResearchArea
        title={publications.researchArea.title}
        description={publications.researchArea.description}
        keywords={publications.researchArea.keywords}
      />

      {/* Related Publications */}

      <PublicationRelated
        badge={publications.related.badge}
        title={publications.related.title}
        description={publications.related.description}
        publications={publications.related.publications}
      />

      {/* Institutional Statistics */}

      <PublicationStatistics
        badge={publications.statistics.badge}
        title={publications.statistics.title}
        description={publications.statistics.description}
        statistics={publications.statistics.statistics}
      />

      {/* Research Impact */}

      <PublicationImpact
        badge={publications.impact.badge}
        title={publications.impact.title}
        description={publications.impact.description}
        statistics={publications.impact.statistics}
      />

      {/* Timeline */}

      <PublicationTimeline
        badge={publications.timeline.badge}
        title={publications.timeline.title}
        description={publications.timeline.description}
        items={publications.timeline.items}
      />

      {/* CTA */}

      <PublicationCTA
        title={publications.cta.title}
        description={publications.cta.description}
        primaryButton={publications.cta.primaryButton}
        secondaryButton={publications.cta.secondaryButton}
      />
    </>
  );
}