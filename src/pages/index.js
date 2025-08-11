"use client";

import Projects from "./projects";
import NavBar from "./navbar";
import AboutMe from "./about";
import { motion } from "framer-motion";
import ContactMe from "./contact";
import OpeningText from "./openingText";
import WaveEffect from "@/components/WaveEffect";
import ExperienceSection from "./experiences";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <NavBar />
      <OpeningText />
      <WaveEffect />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full flex justify-center mt-20 mb-20">
          <AboutMe />
        </div>
      </motion.div>

      <TechStack />
      <ExperienceSection />
      <Projects />
      <ContactMe />
    </>
  );
}
