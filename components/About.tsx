"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p >
        I am a dedicated Software Engineer with a passion for transforming
        concepts into dynamic Software solutions. My journey began in Data
        Analysis, but I quickly gravitated towards web and mobile development,
        where I&apos;ve mastered both front-end and back-end technologies to
        build responsive and engaging applications..{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect, I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>{" "}
      <p className="mb-3">
        {" "}
        <br /> My core stack is{" "}
        <span className="font-medium">
          Angular, Next.js, Node.js, MongoDB, and MySQL
        </span>
        . I am also familiar with Cloud Computing, Network, DevOps, and Linux. I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">Internship position.</span>
      </p>
      {/* <p>
        <span className="italic">When I am not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I am also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
