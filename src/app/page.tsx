import About from "@/components/about/About";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <div className="py-3.5"></div>
    </>

  );
}
