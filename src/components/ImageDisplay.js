import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

import React from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageDisplay({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
      <motion.div whileTap={{ rotate: -3 }}>
        <section class="project-section">
          <div ref={ref} className="rounded-lg shadow-lg">
            <Image src={project.img} alt={project.name} />
          </div>
          <h2>#{project.id}</h2>
        </section>
      </motion.div>
    </>
  );
}

export default ImageDisplay;
