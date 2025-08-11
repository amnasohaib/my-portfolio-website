"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { projects } from "@/config/projectsConfig";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

const ProjectCard = ({ project, index, currentIndex, totalCards, onNext }) => {
  const stackIndex = (index - currentIndex + totalCards) % totalCards;

  const stackRotations = [0, -4, 3, -2, 5, -3];
  const rotation = stackRotations[stackIndex % stackRotations.length];

  const isActive = stackIndex === 0;

  const getStackTransform = (stackIndex) => {
    if (stackIndex === 0) return { x: 0, y: 0, scale: 1 };
    if (stackIndex === 1) return { x: -8, y: 12, scale: 0.96 };
    if (stackIndex === 2) return { x: 6, y: 24, scale: 0.92 };
    if (stackIndex === 3) return { x: -4, y: 36, scale: 0.88 };
    return { x: 0, y: 48, scale: 0.84 };
  };

  const transform = getStackTransform(stackIndex);

  return (
    <motion.div
      className={`absolute inset-0 ${
        isActive ? "cursor-pointer" : "cursor-pointer"
      }`}
      initial={false}
      animate={{
        rotate: rotation,
        scale: transform.scale,
        x: transform.x,
        y: transform.y,
        zIndex: totalCards - stackIndex,
        opacity: stackIndex < 5 ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        rotate: { type: "spring", stiffness: 300, damping: 30 },
      }}
      onClick={isActive ? undefined : onNext}
      whileHover={isActive ? { scale: transform.scale * 1.02 } : {}}
    >
      <div
        className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-darkerBackground to-background shadow-2xl h-full m-4`}
      >
        <div className="p-8 h-full flex flex-col justify-center items-center text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Code2 className="text-white" size={24} />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-wasted-vindey text-white">
              {project.name}
            </h3>
            {project.description && (
              <p
                className={`${cormorant.className} text-slate-200 text-md sm:text-lg leading-relaxed max-w-sm`}
              >
                {project.description}
              </p>
            )}
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center max-w-sm">
              {project.technologies.slice(0, 6).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-white/20 backdrop-blur-sm text-slate-100 px-2 sm:px-3 py-1 rounded-full text-xs border border-white/10"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-slate-300 text-xs px-2">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>
          )}

          <div className="flex gap-4">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-xs sm:text-[16px] text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors border border-white/10"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm text-xs sm:text-[16px] text-white px-4 py-2 rounded-full border border-white/10"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevProject();
    } else if (info.offset.x < -threshold) {
      nextProject();
    }
  };

  return (
    <div id="projects" className="mb-10 md:mb-20">
      <div className="text-center mt-20 my-10 uppercase text-5xl md:text-7xl text-darkerBackground font-aesthetic">
        Projects
      </div>

      {projects.length > 0 ? (
        <div className="flex flex-col items-center space-y-14">
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
                    dragElastic={0.1}
                  >
                    <ProjectCard
                      project={project}
                      index={index}
                      currentIndex={currentIndex}
                      totalCards={projects.length}
                      onNext={nextProject}
                      onPrev={prevProject}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-6">
              <motion.button
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-darkerBackground/20 backdrop-blur-sm border border-darkerBackground/30 text-darkerBackground hover:bg-darkerBackground/30 transition-colors"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-darkerBackground"
                        : "bg-darkerBackground/30"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-darkerBackground/20 backdrop-blur-sm border border-darkerBackground/30 text-darkerBackground hover:bg-darkerBackground/30 transition-colors"
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
            <div
              className={`${cormorant.className} text-darkerBackground/70 text-lg`}
            >
              {currentIndex + 1} of {projects.length}
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
