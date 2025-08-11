"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useWillChange } from "framer-motion";
import { experiences } from "@/config/experiencesConfig";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const willChange = useWillChange();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        opacity,
        scale,
        y,
        willChange 
      }}
      className={`relative mb-12 w-full max-w-4xl mx-auto ${
        isEven ? "pl-6 md:pl-8 lg:pl-0" : "pr-6 md:pr-8 lg:pr-0"
      }`}
    >
      <div
        className={`absolute lg:hidden top-3 h-full w-0.5 bg-gradient-to-b from-darkerBackground/30 to-transparent ${
          isEven ? "left-0" : "right-0"
        }`}
      />
      <div
        className={`absolute lg:hidden top-0 w-2.5 h-2.5 rounded-full bg-darkerBackground/50 border border-purple-200 ${
          isEven ? "left-0 -ml-1" : "right-0 -mr-1"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            type: "spring", 
            damping: 15,
            stiffness: 100,
            delay: index * 0.1
          } 
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className={`relative md:h-[18em] flex items-center ${
          isEven ? "lg:ml-12" : "lg:mr-12"
        } bg-white/95 p-5 md:p-6 rounded-lg md:rounded-xl border border-pink-100/20 shadow-lg`}
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-lg md:text-2xl font-wasted-vindey text-darkerBackground/70">
            {experience.position}
          </h3>
          <div className={`${cormorant.className} flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2`}>
            <span className="text-sm md:text-lg text-darkerBackground/50 font-medium">
              {experience.company}
            </span>
            <span className="text-xs md:text-sm text-darkerBackground/70 px-2 py-0.5 rounded-full border border-darkerBackground/40 self-start md:self-auto">
              {experience.duration}
            </span>
          </div>
          <p className="text-background text-justify text-sm md:text-[15px] leading-relaxed">
            {experience.description}
          </p>
        </div>
      </motion.div>
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
      className="min-h-screen w-full bg-gradient-to-b from-background to-white px-4 sm:px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-20 pt-16 md:pt-20"
      >
        <p className="text-4xl sm:text-5xl md:text-7xl font-aesthetic text-white my-8 md:my-10 uppercase">
          My Experiences
        </p>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 md:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 md:w-64 md:h-64 rounded-full bg-secondary blur-xl md:blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 md:w-80 md:h-80 rounded-full bg-white blur-xl md:blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-darkerBackground/30 to-transparent" />

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