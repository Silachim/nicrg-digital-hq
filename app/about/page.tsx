import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <>
      <Navbar />

      <main>
        <AboutHero />
        <Identity />
        <OurStory />
        <VisionMission />
        <CoreValues />
        <Roadmap />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}