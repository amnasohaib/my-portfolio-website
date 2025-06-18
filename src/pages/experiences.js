"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/config/experiencesConfig";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className={`relative mb-16 w-full max-w-4xl mx-auto ${
        isEven ? "pl-8 lg:pl-0" : "pr-8 lg:pr-0"
      }`}
    >
      <div
        className={`absolute lg:hidden top-3 h-full w-px bg-gradient-to-b from-darkerBackground/50 to-transparent ${
          isEven ? "left-0" : "right-0"
        }`}
      ></div>

      <div
        className={`absolute lg:hidden top-0 w-3 h-3 rounded-full bg-darkerBackground/50 border-2 border-purple-200 ${
          isEven ? "left-0 -ml-1.5 " : "right-0 -mr-1.5 "
        }`}
      ></div>

      <div
        className={`relative md:h-[20em] flex items-center ${
          isEven ? "lg:ml-12 text-left" : "lg:mr-12 "
        } bg-white/90 p-6 rounded-xl border border-pink-100/20 shadow-xl`}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-wasted-vindey text-darkerBackground/70">
            {experience.position}
          </h3>
          <div className={`${cormorant.className} flex items-center gap-2 mb-2`}>
            <span className="md:text-lg text-darkerBackground/50 font-medium">
              {experience.company}
            </span>
            <span className="text-xs md:text-sm text-darkerBackground/70 px-3 py-0.5 rounded-full border border-darkerBackground/40">
              {experience.duration}
            </span>
          </div>
          <p className="text-background text-justify text-[13px] md:text-[16px] leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen w-full bg-background px-4 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-5xl md:text-7xl font-aesthetic text-white mt-20 my-10 uppercase">
          My Experiences
        </p>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-white blur-3xl"></div>
      </div>

      <div className="relative mx-auto">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-darkerBackground/50 to-transparent"></div>

        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
