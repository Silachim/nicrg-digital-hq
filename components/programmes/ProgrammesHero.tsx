/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Programmes Component
 * Component: ProgrammesHero
 * Version: 1.0.0
 *
 * Purpose:
 * Hero section for the Programmes page.
 *
 * Used In:
 * • Programmes Page
 *
 * Author:
 * NICRG Digital HQ
 * --------------------------------------------------------
 */

import Hero from "@/components/ui/Hero";

type ProgrammesHeroProps = {
  badge: string;

  title: string;

  description: string;

  primaryButton: string;

  secondaryButton: string;
};

export default function ProgrammesHero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: ProgrammesHeroProps) {
  return (
    <Hero
      badge={badge}
      title={title}
      description={description}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
    />
  );
}