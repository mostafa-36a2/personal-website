import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Timeline } from "@/components/sections/timeline";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Interests } from "@/components/sections/interests";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Services />
      <Interests />
      <Contact />
    </main>
  );
}
