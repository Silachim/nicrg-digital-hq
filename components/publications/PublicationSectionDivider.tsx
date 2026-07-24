/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationSectionDivider
 * --------------------------------------------------------
 */

import SectionHeader from "@/components/ui/SectionHeader";

type PublicationSectionDividerProps = {
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
};

export default function PublicationSectionDivider({
  badge,
  title,
  description,
  className = "",
}: PublicationSectionDividerProps) {
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

        <div className="mx-6 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-200">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-300" />
      </div>
    </div>
  );
}