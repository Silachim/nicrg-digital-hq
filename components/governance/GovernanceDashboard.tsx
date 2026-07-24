/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceDashboard
 * Version: 1.0.0
 *
 * Purpose:
 * Executive governance dashboard showing
 * governance maturity, institutional health,
 * compliance, and strategic priorities.
 *
 * Used In:
 * • Governance Page
 * • Executive Portal
 * • Annual Reports
 * • Strategic Governance
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import ExecutiveDashboard from "@/components/dashboard/ExecutiveDashboard";

type Metric = {
  value: number;
  title: string;
  category: string;
  status: string;
};

type Indicator = {
  title: string;
  value: number;
  status: string;
  color: string;
};

type Outlook = {
  phase: string;
  priority: string;
  milestone: string;
  vision: string;
};

type Footer = {
  lastUpdated: string;
  reportingCycle: string;
  framework: string;
  version: string;
};

type GovernanceDashboardProps = {
  badge: string;
  title: string;
  description: string;
  metrics: Metric[];
  indicators: Indicator[];
  outlook: Outlook;
  footer: Footer;
};

export default function GovernanceDashboard({
  badge,
  title,
  description,
  metrics,
  indicators,
  outlook,
  footer,
}: GovernanceDashboardProps) {
  return (
    <ExecutiveDashboard
      badge={badge}
      title={title}
      description={description}
      metrics={metrics}
      indicators={indicators}
      outlook={outlook}
      footer={footer}
    />
  );
}