/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * UI Form Component
 * Component: FormActions
 * Version: 1.0.0
 *
 * Purpose:
 * Standard action area for all NICRG forms.
 *
 * Used In:
 * • Contact
 * • Membership Application
 * • Conference Registration
 * • Fellowship Application
 * • Volunteer Registration
 * • Research Submission
 * • Executive Dashboard Forms
 * --------------------------------------------------------
 */

import { ReactNode } from "react";

type FormActionsProps = {
  children: ReactNode;

  align?: "left" | "center" | "right" | "between";

  className?: string;
};

export default function FormActions({
  children,
  align = "right",
  className = "",
}: FormActionsProps) {
  const alignment = {
    left: "justify-start",

    center: "justify-center",

    right: "justify-end",

    between: "justify-between",
  };

  return (
    <div
      className={[
        "flex flex-wrap items-center gap-4 border-t border-slate-200 pt-8 mt-10",
        alignment[align],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}