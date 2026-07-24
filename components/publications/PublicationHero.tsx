/**
 * --------------------------------------------------------
 * NICRG Design System (NDS)
 * Publications Component
 * Component: PublicationHero
 * Version: 2.0.0
 *
 * Purpose:
 * Hero banner introducing the
 * NICRG Publications Repository.
 *
 * Used In:
 * • Publications Page
 *
 * --------------------------------------------------------
 */

import Container from "@/components/common/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type PublicationHeroProps = {
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

export default function PublicationHero({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: PublicationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 py-32 text-white">
      <Container>
        <Badge variant="primary">
          {badge}
        </Badge>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold md:text-7xl">
          {title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
          {description}
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <Button href={primaryButton.href}>
            {primaryButton.label}
          </Button>

          <Button
            href={secondaryButton.href}
            variant="secondary"
          >
            {secondaryButton.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}