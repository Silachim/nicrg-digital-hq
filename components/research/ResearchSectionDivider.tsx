/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Research Component
 * Component: ResearchSectionDivider
 * Version: 1.0.0
 *
 * Purpose:
 * Provides a reusable visual divider between
 * major research sections while optionally
 * displaying a heading and supporting text.
 *
 * Used In:
 * • Research Overview
 * • Research Cluster Pages
 * • Publications
 * • Annual Reports
 * • Strategic Plan
 * • Future NIIRP Platform
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import SectionHeader from "@/components/ui/SectionHeader";

type ResearchSectionDividerProps = {
  badge?: string;

  title?: string;

  description?: string;

  className?: string;
};

export default function ResearchSectionDivider({
  badge,
  title,
  description,
  className = "",
}: ResearchSectionDividerProps) {
  return (
    <div className={`py-20 ${className}`}>
      {(badge || title || description) && (
        <SectionHeader
          badge={badge}
          title={title ?? ""}
          description={description}
        />
      )}

      <div className="mx-auto mt-12 flex max-w-5xl items-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-300" />

        <div className="mx-6 h-3 w-3 rounded-full bg-emerald-600 shadow-lg shadow-emerald-200" />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-300" />
      </div>
    </div>
  );
}