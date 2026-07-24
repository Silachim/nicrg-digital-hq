import PageTemplate from "@/components/common/PageTemplate";

import {
  AboutHero,
  Identity,
  OurStory,
  VisionMission,
  CoreValues,
  Roadmap,
  AboutCTA,
} from "@/components/about";

export default function AboutPage() {
  return (
    <PageTemplate
      breadcrumbs={[
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About NICRG",
        },
      ]}
      next={{
        title: "Research",
        href: "/research",
      }}
      related={[
        {
          title: "Vision & Mission",
          href: "/about#vision",
        },
        {
          title: "Leadership",
          href: "/leadership",
        },
        {
          title: "Governance",
          href: "/governance",
        },
        {
          title: "Partners",
          href: "/partners",
        },
      ]}
    >
      <main>
        <AboutHero />
        <Identity />
        <OurStory />
        <VisionMission />
        <CoreValues />
        <Roadmap />
        <AboutCTA />
      </main>
    </PageTemplate>
  );
}