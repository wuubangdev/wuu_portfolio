import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import HeroSection from "@/components/hero/HeroSection";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>

  );
}
