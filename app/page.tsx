import About from "@/components/about";
import ContactForm from "@/components/contactForm";


import Experience from "@/components/experience";


import InfiniteScrollAnimationPage from "@/components/InfiniteScrollAnimationPage";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ThemeSwitch from "@/components/theme-switch";




export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Intro />
      <InfiniteScrollAnimationPage />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />

      <Experience />
      <InfiniteScrollAnimationPage />

      <ContactForm />

      <ThemeSwitch/>
    </main>
  );
}
