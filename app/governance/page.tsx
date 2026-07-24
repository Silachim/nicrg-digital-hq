/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Page
 * Governance
 *
 * Purpose:
 * Presents NICRG's governance philosophy,
 * leadership, institutional framework,
 * committees, policies, accountability,
 * and strategic direction.
 *
 * --------------------------------------------------------
 */

import {
  GovernanceHero,
  GovernanceMission,
  GovernanceStructure,
  GovernanceLeadership,
  GovernanceCommittee,
  GovernanceFramework,
  GovernanceDashboard,
  GovernancePolicies,
  GovernanceTimeline,
  GovernanceQuote,
  GovernanceCallout,
} from "@/components/governance";

import GovernanceCTA from "@/components/governance/GovernanceCTA";

import { governance } from "@/content";

export default function GovernancePage() {
  return (
    <>
      <GovernanceHero
        badge={governance.hero.badge}
        title={governance.hero.title}
        description={governance.hero.description}
        primaryButton={governance.hero.primaryButton}
        secondaryButton={governance.hero.secondaryButton}
      />

      <GovernanceMission
        badge={governance.mission.badge}
        title={governance.mission.title}
        description={governance.mission.description}
        principles={governance.mission.principles}
      />

      <GovernanceCallout
        badge={governance.callout.badge}
        title={governance.callout.title}
        description={governance.callout.description}
        primaryButton={governance.callout.primaryButton}
        secondaryButton={governance.callout.secondaryButton}
      />

      <GovernanceStructure
  badge={governance.structure.badge}
  title={governance.structure.title}
  description={governance.structure.description}
  structures={governance.structure.structures}
/>
      <GovernanceLeadership
        badge={governance.leadership.badge}
        title={governance.leadership.title}
        description={governance.leadership.description}
        leaders={governance.leadership.leaders}
      />

      <GovernanceCommittee
        badge={governance.committees.badge}
        title={governance.committees.title}
        description={governance.committees.description}
        committees={governance.committees.committees}
      />

      <GovernanceFramework
  badge={governance.framework.badge}
  title={governance.framework.title}
  description={governance.framework.description}
  principles={governance.framework.principles}
/>

      <GovernancePolicies
        badge="Institutional Policies"
        title="Governance Policies"
        description="Policies that guide accountability, transparency, ethical leadership, and responsible institutional management."
        policies={governance.framework.policies}
      />

<GovernanceDashboard
  badge={governance.dashboard.badge}
  title={governance.dashboard.title}
  description={governance.dashboard.description}
  metrics={governance.dashboard.metrics}
  indicators={governance.dashboard.indicators}
  outlook={governance.dashboard.outlook}
  footer={governance.dashboard.footer}
/>
      <GovernanceTimeline
        badge={governance.timeline.badge}
        title={governance.timeline.title}
        description={governance.timeline.description}
        items={governance.timeline.items}
      />

      <GovernanceQuote
        quote={governance.quote.quote}
        author={governance.quote.author}
        title={governance.quote.title}
      />

      <GovernanceCTA
        title={governance.cta.title}
        description={governance.cta.description}
        primaryButton={governance.cta.primaryButton}
        secondaryButton={governance.cta.secondaryButton}
      />
    </>
  );
}