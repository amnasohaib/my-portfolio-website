"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Loader2 } from "lucide-react";
import { useVercelProjects } from "@/app/api/projectApi";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl bg-background shadow-2xl`}
      whileHover={{
        scale: 1.02,
        rotate: -0.5,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="p-6 h-full flex flex-col justify-center items-center text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-darkerBackground/70 to-darkerBackground/20 rounded-2xl flex items-center justify-center">
          <Code2 className="text-white" size={24} />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-wasted-vindey text-white">
            {project.name}
          </h3>
          {project.description && (
            <p className={`${cormorant.className} text-slate-100 text-md`}>
              {project.description}
            </p>
          )}
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-darkerBackground/70 text-slate-100 px-3 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-darkerBackground/70 text-white px-4 py-2 rounded-full hover:bg-darkerBackground transition-colors cursor-none"
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
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-gradient-to-br from-darkerBackground/70 to-darkerBackground/20 text-white px-4 py-2 rounded-full cursor-none"
            >
              <ExternalLink size={16} />
              View Live
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects, error } = useVercelProjects();

  if (error) {
    return (
      <div className="text-center w-full text-xs">
        Oops! There seems to be a problem while loading the projects{" "}
      </div>
    );
  }

  return (
    <div id="projects" className="mb-10 md:mb-20">
      <div className="text-center mt-20 my-10 uppercase text-5xl md:text-7xl text-darkerBackground font-aesthetic">
        Projects
      </div>
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 p-4 lg:grid-cols-3 gap-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
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
