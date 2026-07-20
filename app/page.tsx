import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/homepage/Hero";
import MissionVision from "@/components/homepage/MissionVision";
import StrategicObjectives from "@/components/homepage/StrategicObjectives";
import ResearchClusters from "@/components/homepage/ResearchClusters";
import KnowledgeNetwork from "@/components/homepage/KnowledgeNetwork";
import Partners from "@/components/homepage/Partners";
import JoinNetwork from "@/components/homepage/JoinNetwork";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <MissionVision />
        <StrategicObjectives />
        <ResearchClusters />
        <KnowledgeNetwork /> 
        <Partners /> 
        <JoinNetwork />
      </main>


      <Footer />
    </>
  );
}