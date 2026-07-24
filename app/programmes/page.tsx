/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Page
 * Programmes
 *
 * Purpose:
 * Presents NICRG's institutional programmes,
 * flagship initiatives, impact, capacity
 * building, partnerships, and strategic
 * development activities.
 *
 * --------------------------------------------------------
 */

import {
  ProgrammesHero,
  ProgrammesOverview,
  ProgrammesCategory,
  ProgrammesFeature,
  ProgrammesStatistics,
  ProgrammesTimeline,
  ProgrammesImpact,
  ProgrammesTestimonial,
  ProgrammesCallout,
  ProgrammesCTA,
} from "@/components/programmes";

import { programmes } from "@/content";

export default function ProgrammesPage() {
  return (
    <>
      <ProgrammesHero
        badge={programmes.hero.badge}
        title={programmes.hero.title}
        description={programmes.hero.description}
        primaryButton={programmes.hero.primaryButton}
        secondaryButton={programmes.hero.secondaryButton}
      />

      <ProgrammesOverview
        badge={programmes.overview.badge}
        title={programmes.overview.title}
        description={programmes.overview.description}
        categories={programmes.overview.categories}
      />

      <ProgrammesCategory
        badge={programmes.categories.badge}
        title={programmes.categories.title}
        description={programmes.categories.description}
        categories={programmes.categories.categories}
      />

      <ProgrammesCallout
        badge={programmes.callout.badge}
        title={programmes.callout.title}
        description={programmes.callout.description}
        primaryButton={programmes.callout.primaryButton}
        secondaryButton={programmes.callout.secondaryButton}
      />

      <ProgrammesFeature
        badge={programmes.features.badge}
        title={programmes.features.title}
        description={programmes.features.description}
        features={programmes.features.features}
      />

      <ProgrammesStatistics
        badge={programmes.statistics.badge}
        title={programmes.statistics.title}
        description={programmes.statistics.description}
        metrics={programmes.statistics.metrics}
      />

      <ProgrammesTimeline
        badge={programmes.timeline.badge}
        title={programmes.timeline.title}
        description={programmes.timeline.description}
        items={programmes.timeline.items}
      />

      <ProgrammesImpact
        badge={programmes.impact.badge}
        title={programmes.impact.title}
        description={programmes.impact.description}
        impacts={programmes.impact.impacts}
      />

      <ProgrammesTestimonial
        quote={programmes.testimonial.quote}
        author={programmes.testimonial.author}
        title={programmes.testimonial.title}
        organization={programmes.testimonial.organization}
      />

      <ProgrammesCTA
        title={programmes.cta.title}
        description={programmes.cta.description}
        primaryButton={programmes.cta.primaryButton}
        secondaryButton={programmes.cta.secondaryButton}
      />
    </>
  );
}