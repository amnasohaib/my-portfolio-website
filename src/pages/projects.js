import ProjectImg01 from "../../public/conversationalist.png";
import ProjectImg02 from "../../public/fahm-school.png";
import ProjectImg03 from "../../public/portfolio.png";
import ProjectImg04 from "../../public/portfolio-project.png";

import { Orbitron } from "next/font/google";

import MarqueeSlider from "react-marquee-slider";

import React from 'react';
import ImageDisplay from "@/components/ImageDisplay";

const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });

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
  {
    id: '004',
    img: ProjectImg04,
    name: "Portfolio Website",
  },
];


const Projects = () => {

  const loopLength = 10;

  return (
    <>
    <div id="projects" className={`${orbitron.className} text-4xl`}>
      <MarqueeSlider velocity={15} direction="ltr">
      {Array.from({ length: loopLength }).map((_, index) => (
        <React.Fragment key={index}>
          <div className="tracking-wider"> PROJECTS </div>
        </React.Fragment>
      ))}
      </MarqueeSlider>
    </div>

    {projects.map((image) => (
        <ImageDisplay project={image} key={image.id}  />
    ))}
  </>
  );
};

export default Projects;