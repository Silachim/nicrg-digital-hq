/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Governance Component
 * Component: GovernanceHero
 * Version: 2.0.0
 *
 * Purpose:
 * Hero section introducing NICRG's
 * governance philosophy, leadership,
 * transparency, and institutional
 * accountability.
 * --------------------------------------------------------
 */

import Hero from "@/components/ui/Hero";

type GovernanceHeroProps = {
  badge: string;
  title: string;
  description: string;

  primaryButton: {
    label: string;
    href: string;
  };

  secondaryButton: {
    label: string;
    href: string;
  };
};

export default function GovernanceHero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: GovernanceHeroProps) {
  return (
    <Hero
      badge={badge}
      title={title}
      description={description}
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      background="gradient"
      align="center"
    />
  );
}