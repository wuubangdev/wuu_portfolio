import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import HeroSection from "@/components/hero/HeroSection";
import Projects from "@/components/projects/Projects";
import Services from "@/components/services/Services";
import Skills from "@/components/skills/Skills";
import ScrollTop from "@/components/utils/ScrollTop";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <ScrollTop />
    </>

  );
}
