/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipStatistics
 * Version: 1.0.0
 *
 * Purpose:
 * Displays executive membership metrics.
 * Built upon the shared StatisticStrip.
 * --------------------------------------------------------
 */

import StatisticStrip from "@/components/ui/StatisticStrip";

type Statistic = {
  value: string;
  label: string;
};

type MembershipStatisticsProps = {
  statistics: Statistic[];
};

export default function MembershipStatistics({
  statistics,
}: MembershipStatisticsProps) {
  return (
    <StatisticStrip
      stats={statistics}
    />
  );
}