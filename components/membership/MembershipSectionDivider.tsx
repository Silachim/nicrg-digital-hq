/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipSectionDivider
 * Version: 2.0.0
 *
 * Purpose:
 * Separates major membership sections
 * while reinforcing the visual identity
 * of the NICRG Design System.
 * --------------------------------------------------------
 */

import SectionHeader from "@/components/ui/SectionHeader";

type MembershipSectionDividerProps = {
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
};

export default function MembershipSectionDivider({
  badge,
  title,
  description,
  className = "",
}: MembershipSectionDividerProps) {
  return (
    <section className={`py-20 lg:py-24 ${className}`}>
      {(badge || title || description) && (
        <SectionHeader
          badge={badge}
          title={title ?? ""}
          description={description}
        />
      )}

      <div className="mx-auto mt-14 flex max-w-5xl items-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-300" />

        <div className="mx-6 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 shadow-lg shadow-emerald-200">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-300" />
      </div>
    </section>
  );
}