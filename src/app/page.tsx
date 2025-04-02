import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import HeroSection from "@/components/hero/HeroSection";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
    </>

  );
}
