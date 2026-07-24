import Hero from "@/components/ui/Hero";

import { organization } from "@/content";

export default function AboutHero() {
  return (
    <Hero
      badge="About NICRG"
      title={organization.aboutHeroTitle}
      description={organization.identity}
      primaryButton={{
        label: "Explore Research",
        href: "/research",
      }}
      secondaryButton={{
        label: "Become a Member",
        href: "/membership",
      }}
      background="gradient"
      align="left"
    />
  );
}