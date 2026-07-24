/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Component: KPIGrid
 * Version: 1.0.0
 *
 * Purpose:
 * Standard responsive layout for MetricCards,
 * ProgressRings and executive KPI widgets.
 *
 * Used In:
 * • Research Dashboard
 * • Governance Dashboard
 * • Membership Dashboard
 * • Executive Intelligence
 * • Annual Reports
 * • Admin Portal
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

type KPIGridProps = {
  children: ReactNode;

  columns?: 2 | 3 | 4 | 5 | 6;

  gap?: "sm" | "md" | "lg";

  className?: string;
};

export default function KPIGrid({
  children,

  columns = 4,

  gap = "md",

  className = "",
}: KPIGridProps) {
  const columnMap = {
    2: "md:grid-cols-2",

    3: "md:grid-cols-2 xl:grid-cols-3",

    4: "md:grid-cols-2 xl:grid-cols-4",

    5: "md:grid-cols-2 xl:grid-cols-5",

    6: "md:grid-cols-2 xl:grid-cols-6",
  };

  const gapMap = {
    sm: "gap-4",

    md: "gap-6",

    lg: "gap-8",
  };

  return (
    <div
      className={[
        "grid",

        columnMap[columns],

        gapMap[gap],

        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}