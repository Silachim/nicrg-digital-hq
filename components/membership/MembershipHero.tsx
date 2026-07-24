/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Membership Component
 * Component: MembershipHero
 * Version: 3.0.0
 *
 * Purpose:
 * Executive hero section for the Membership page.
 * Displays the page introduction and primary actions.
 *
 * Note:
 * Membership philosophy is rendered separately by the
 * MembershipPrinciple component.
 * --------------------------------------------------------
 */

import Hero from "@/components/ui/Hero";

type HeroButton = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type MembershipHeroProps = {
  badge: string;

  title: string;

  description: string;

  primaryButton?: HeroButton;

  secondaryButton?: HeroButton;
};

export default function MembershipHero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: MembershipHeroProps) {
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