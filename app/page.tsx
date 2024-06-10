"use client";

import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/Section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
     <Intro />
     <SectionDivider />
     <About />
     <SectionDivider />
     <Projects />
    </main>
  );
}
