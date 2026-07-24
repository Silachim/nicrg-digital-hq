/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Activities Component
 * Component: ActivitiesHero
 * --------------------------------------------------------
 */

import Hero from "@/components/ui/Hero";

type ActivitiesHeroProps = {
  badge: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
};

export default function ActivitiesHero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: ActivitiesHeroProps) {
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