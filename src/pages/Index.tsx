import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DropsSection from "@/components/DropsSection";
import FilmStripSection from "@/components/FilmStripSection";
import EventRadar from "@/components/EventRadar";
import MixtapePlayer from "@/components/MixtapePlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <DropsSection />
      <FilmStripSection />
      <EventRadar />
      <Footer />
      <MixtapePlayer />
    </div>
  );
};

export default Index;
