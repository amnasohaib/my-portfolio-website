import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import { Globe, Loader2 } from "lucide-react";
import { useVercelProjects } from "@/app/api/projectApi";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group overflow-hidden rounded-2xl bg-background shadow-2xl"
      whileHover={{
        scale: 1.05,
        rotate: -1,
        boxShadow: "0 25px 50px -12px rgba(81, 41, 123, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="p-6 space-y-4">
        {project.previewImageUrl && (
          <div className="relative w-full my-4 md:h-64 overflow-hidden rounded-t-lg">
            <Image
              src={project.previewImageUrl}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        )}

        {/* Project Name */}
        <span className="text-3xl font-bold text-white">{project.name}</span>

        <div className="flex justify-between items-center">
          {/* Links */}
          <div className="flex space-x-2">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-white"
                title="View on GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="text-white"
                title="View Live Site"
              >
                <Globe />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-white text-sm">{project.description}</p>

        {/* Technologies/Languages */}
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <h4 className="text-white font-medium mb-2">Languages:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-darkerBackground bg-opacity-50 text-white px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { projects, error } = useVercelProjects();

  console.log("Projects data:", projects);

  if (error) {
    return (
      <div>Oops! There seems to be a problem while loading the projects </div>
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
