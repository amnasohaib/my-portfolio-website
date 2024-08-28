import Projects from "./projects";
import NavBar from "./navbar";
import AboutMe from "./aboutMe";
import { motion } from "framer-motion";
import ContactMe from "./contact";
import OpeningText from "./openingText";
import WaveEffect from "@/components/WaveEffect";

export default function Home() {
  return (
    <div>
      <NavBar />

      <OpeningText />

      <WaveEffect />
      
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
