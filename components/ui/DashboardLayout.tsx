/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Component: DashboardLayout
 * Version: 1.0.0
 *
 * Purpose:
 * Standard layout wrapper for executive dashboards.
 *
 * Used In:
 * • Research Dashboard
 * • Governance Dashboard
 * • Membership Dashboard
 * • Finance Dashboard
 * • Publications Dashboard
 * • Executive Intelligence
 * • Annual Reports
 *
 * Features
 * • Consistent dashboard spacing
 * • Responsive layout
 * • Standard section rhythm
 * • Optional sidebar support (future)
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;

  className?: string;

  maxWidth?:
    | "default"
    | "wide"
    | "full";
};

export default function DashboardLayout({
  children,

  className = "",

  maxWidth = "default",
}: DashboardLayoutProps) {
  const widths = {
    default: "max-w-7xl",

    wide: "max-w-screen-2xl",

    full: "max-w-full",
  };

  return (
    <section
      className={[
        "mx-auto",

        widths[maxWidth],

        "space-y-10",

        "px-6",

        "py-10",

        "lg:px-10",

        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}