"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
//import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
