import Projects from "./projects";
import NavBar from "./navbar";
import AboutMe from "./aboutMe";
import { motion } from "framer-motion";
import ContactMe from "./contact";
import OpeningText from "./openingText";

export default function Home() {
  return (
    <div>
      <NavBar />

      <OpeningText />

      <div id="about" className="m-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 180"
        >
          <path
            id="wavePath"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-background opacity-50"
          ></path>

          <text className="text-7xl" fontWeight="bold" fill="#333" dy={70}>
            <textPath href="#wavePath">something about me</textPath>
          </text>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex justify-center mt-20 mb-60">
          <div className="w-4/5 max-w-md">
            <AboutMe />
          </div>
        </div>
      </motion.div>

      <Projects />

      <ContactMe />
    </div>
  );
}
