"use client";

import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });
import { IoCubeOutline } from "react-icons/io5";
import Image from "next/image";
import { techStack } from "@/config/techConfig";

const TechBubble = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: index * 0.02,
          duration: 0.9,
          ease: "easeOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="group relative"
    >
      <div className="flex gap-2 md:gap-4 items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200 text-gray-700 text-sm md:text-[16px] hover:from-gray-200 hover:to-gray-100 transition-all duration-300 shadow-sm hover:shadow-md">
        <Image
          alt={tech.icon}
          src={tech.icon}
          width={"30"}
          height={"30"}
          className=""
        />
        {tech.name}

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          {tech.category}
        </div>
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const leftTech = techStack.slice(0, 7);
  const rightTech = techStack.slice(7);

  return (
    <div className="relative bg-background w-full flex flex-col space-y-6 justify-center items-center py-32 sm:my-0 md:px-32 min-h-screen">
      <motion.div
        className="sm:absolute sm:left-12 md:left-32 flex flex-col gap-3"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {leftTech.map((tech, index) => (
          <TechBubble key={tech.name} tech={tech} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="z-10 text-center px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <IoCubeOutline className="text-white w-12 h-12" />
          </motion.div>
        </div>
        <p
          className={`${cormorant.className} text-white text-lg md:text-2xl italic`}
        >
          crafting with modern tools
        </p>
      </motion.div>

      <motion.div
        className="sm:absolute sm:right-12 md:right-32 flex flex-col gap-3"
        animate={{
          y: [0, 10, 0],
          x: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {rightTech.map((tech, index) => (
          <TechBubble key={tech.name} tech={tech} index={index + 5} />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
