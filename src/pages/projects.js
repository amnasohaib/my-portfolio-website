"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, ExternalLink, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { projects } from "@/config/projectsConfig";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

/* ─── Card stack config ─────────────────────────────────────── */
const STACK_OFFSETS = [
  { x: 0,   y: 0,  scale: 1,    rotate: 0,  z: 10 },
  { x: -10, y: 14, scale: 0.96, rotate: -4, z: 9  },
  { x: 8,   y: 26, scale: 0.92, rotate:  3, z: 8  },
  { x: -5,  y: 38, scale: 0.88, rotate: -2, z: 7  },
  { x: 4,   y: 48, scale: 0.84, rotate:  2, z: 6  },
];

/* ─── Single stacked card ───────────────────────────────────── */
const ProjectCard = ({ project, stackIndex, isActive, onClick }) => {
  const pos = STACK_OFFSETS[Math.min(stackIndex, STACK_OFFSETS.length - 1)];

  if (stackIndex >= STACK_OFFSETS.length) return null;

  return (
    <motion.div
      className="absolute inset-0"
      initial={false}
      animate={{
        x: pos.x,
        y: pos.y,
        scale: pos.scale,
        rotate: pos.rotate,
        zIndex: pos.z,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 0.8,
      }}
      onClick={!isActive ? onClick : undefined}
      whileHover={!isActive ? { y: pos.y - 4, transition: { duration: 0.2 } } : {}}
      style={{ transformOrigin: "bottom center" }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-darkerBackground to-background shadow-2xl h-full mx-4">
        {/* subtle top-edge shimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="p-8 h-full flex flex-col justify-center items-center text-center space-y-6">
          {/* Icon */}
          <motion.div
            className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            animate={isActive ? { rotate: [0, 6, -4, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          >
            <Code2 className="text-white/80" size={22} />
          </motion.div>

          {/* Title + description */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-wasted-vindey text-white tracking-wide">
              {project.name}
            </h3>
            {project.description && (
              <p className={`${cormorant.className} text-slate-300 text-base sm:text-lg leading-relaxed max-w-xs`}>
                {project.description}
              </p>
            )}
          </div>

          {/* Tech chips */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 justify-center max-w-xs">
              {project.technologies.slice(0, 6).map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/10 text-slate-200 px-2.5 py-0.5 rounded-full text-[11px] border border-white/10 tracking-wide"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-slate-400 text-[11px] px-2 self-center">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/10 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full border border-white/10 transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Nav button ────────────────────────────────────────────── */
const NavButton = ({ onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.12 }}
    whileTap={{ scale: 0.88 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    className="p-3 rounded-full bg-darkerBackground/15 backdrop-blur-sm border border-darkerBackground/25 text-darkerBackground hover:bg-darkerBackground/25 transition-colors"
  >
    {children}
  </motion.button>
);

/* ─── Section ───────────────────────────────────────────────── */
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 prev, 1 next

  const go = (delta) => {
    setDirection(delta);
    setCurrentIndex((prev) => (prev + delta + projects.length) % projects.length);
  };

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 60) go(-1);
    else if (info.offset.x < -60) go(1);
  };

  return (
    <div id="projects" className="mb-10 md:mb-20">
      {/* Section heading */}
      <motion.div
        className="text-center mt-20 my-10 uppercase text-5xl md:text-7xl text-darkerBackground font-aesthetic"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Projects
      </motion.div>

      {projects.length > 0 ? (
        <div className="flex flex-col items-center space-y-14">
          {/* Stack area */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative h-96 md:h-[500px] w-full">
              {projects.map((project, index) => {
                const stackIndex =
                  (index - currentIndex + projects.length) % projects.length;
                const isActive = stackIndex === 0;

                return (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0"
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={isActive ? handleDragEnd : undefined}
                    dragElastic={0.08}
                  >
                    <ProjectCard
                      project={project}
                      stackIndex={stackIndex}
                      isActive={isActive}
                      onClick={() => go(1)}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* swipe hint — fades out after first interaction */}
            <motion.p
              className={`${cormorant.className} text-center text-darkerBackground/40 text-sm mt-2 italic`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1.2 }}
            >
              swipe or click behind to browse
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-6">
              <NavButton onClick={() => go(-1)}>
                <ChevronLeft size={20} />
              </NavButton>

              {/* Dot indicators */}
              <div className="flex gap-2 items-center">
                {projects.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                    animate={{
                      width: i === currentIndex ? 20 : 8,
                      backgroundColor: i === currentIndex
                        ? "var(--color-darkerBackground, #2d3a2e)"
                        : "rgba(45,58,46,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-2 rounded-full"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.85 }}
                  />
                ))}
              </div>

              <NavButton onClick={() => go(1)}>
                <ChevronRight size={20} />
              </NavButton>
            </div>

            {/* Counter */}
            <div className="relative h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  className={`${cormorant.className} text-darkerBackground/60 text-lg`}
                  initial={{ y: direction >= 0 ? 14 : -14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction >= 0 ? -14 : 14, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {currentIndex + 1} / {projects.length}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center m-10">
          <Loader2 className="animate-spin text-black" />
        </div>
      )}
    </div>
  );
};

export default Projects;