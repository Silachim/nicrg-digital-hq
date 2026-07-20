import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/about/AboutHero";
import Identity from "@/components/about/Identity";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import Roadmap from "@/components/about/Roadmap";

import AboutCTA from "@/components/about/AboutCTA";

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