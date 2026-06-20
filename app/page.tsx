import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto px-6">
        <FeatureCards />
      </div>
    </>
  );
}