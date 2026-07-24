/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Activities Component
 * Component: ActivitiesSectionDivider
 * --------------------------------------------------------
 */

import SectionHeader from "@/components/ui/SectionHeader";

type ActivitiesSectionDividerProps = {
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
};

export default function ActivitiesSectionDivider({
  badge,
  title,
  description,
  className = "",
}: ActivitiesSectionDividerProps) {
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

        <div className="mx-6 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 shadow-lg shadow-emerald-200">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-300" />
      </div>
    </div>
  );
}