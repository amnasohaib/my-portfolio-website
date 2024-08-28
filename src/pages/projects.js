import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

import ProjectImg01 from "@/public/conversationalist.png";
import ProjectImg02 from "@/public/fahm-school.png";
import ProjectImg03 from "@/public/portfolio.png";
import Image  from "next/image";

import { Orbitron } from "next/font/google";

import MarqueeSlider from "react-marquee-slider";
import { Spacer } from "@nextui-org/react";

const orbitron = Orbitron({ weight: "500", subsets: ["latin"] });

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const projects = [
  {
    id: '001',
    img: ProjectImg01,
    name: "Conversationalist",
  },
  {
    id: '002',
    img: ProjectImg02,
    name: "FAHM School",
  },
  {
    id: '003',
    img: ProjectImg03,
    name: "Portfolio Website",
  },
];


function ImageDisplay({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <>
    <motion.div whileHover={{ rotate: -3 }}>
    <section class="project-section">
      <div ref={ref} className="rounded-lg shadow-lg">
      <Image
          src={project.img}
          alt={project.name}
          width={500}
      height={500}
        />
      </div>
      <motion.h2 style={{ y }}>#{project.id}</motion.h2>
    </section>
    </motion.div>
    </>
  );
}


const Projects = () => {
  return (
    <>
    <div className={`${orbitron.className} text-4xl`}>
      <MarqueeSlider id="projects" velocity={30} direction="ltr">
        <div> PROJECTS </div>
        <Spacer x={10} />
        <div> PROJECTS </div>
        <Spacer x={10} />
        <div> PROJECTS </div>
        <Spacer x={10} />
        <div> PROJECTS </div>
        <Spacer x={10} />
        <div> PROJECTS </div>
        <Spacer x={10} />
        <div> PROJECTS </div>
        <Spacer x={10} />
      </MarqueeSlider>
    </div>

    {projects.map((image) => (
        <ImageDisplay project={image} key={image.id}  />
    ))}
  </>
  );
};

export default Projects;
