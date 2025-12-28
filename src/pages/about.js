"use client";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

const AboutMe = () => {
  return (
    <div
      className={`${cormorant.className} relative w-full m-3 sm:mb-32 sm:m-6 h-[25rem] sm:min-h-screen text-md md:text-2xl text-justify overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1"
      >
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              backgroundColor: i % 2 ? "#8e9b90" : "#a8d3aeff",
            }}
            transition={{
              duration: 0.5,
              delay: (i % 10) * 0.05,
              type: "spring",
            }}
            className="w-1 h-1 sm:w-2 sm:h-2 rounded-full opacity-30"
          />
        ))}
      </motion.div>
      <p
        className={`bg-white/50 rounded-lg absolute max-w-lg left-0 text-start mb-6`}
      >
        a computer science graduate exploring the vastness of frontend, design
        and making visually appealing websites! My journey started with a simple
        curiosity about how websites work, and now it has turned into a full-on
        passion for creating smooth, interactive user experiences.
      </p>

      <p
        className={`bg-white/50 rounded-lg absolute max-w-lg right-0 bottom-0 text-end`}
      >
        I love turning ideas into aesthetic, responsive designs and websites
        that just feel right to use. Whether it is tweaking the tiniest detail
        or making sure everything works seamlessly across devices, I&apos;m all
        about the user experience and making myself a better coder by each line
        of code!
      </p>
    </div>
  );
};

export default AboutMe;
