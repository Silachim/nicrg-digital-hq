/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesCTA
 * Version: 1.0.0
 *
 * Purpose:
 * Final call-to-action for the
 * Programmes page.
 *
 * --------------------------------------------------------
 */

import CTA from "@/components/ui/CTA";

type ProgrammesCTAProps = {
  title: string;

  description: string;

  primaryButton: string;

  secondaryButton: string;
};

export default function ProgrammesCTA(
  props: ProgrammesCTAProps
) {
  return <CTA {...props} />;
}