import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  ResearchHero,
  ResearchPhilosophy,
  ResearchClusters,
  KnowledgePathway,
  ResearchDashboard,
} from "@/components/research";

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main>
        <ResearchHero />
        <ResearchPhilosophy />
        <ResearchClusters />
        <KnowledgePathway />
        <ResearchDashboard />
      </main>

      <Footer />
    </>
  );
}