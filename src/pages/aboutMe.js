
import { Card } from "@nextui-org/react";

import { Anta } from "next/font/google";

import { motion } from 'framer-motion';

const anta = Anta({weight: '400', subsets: ["latin"] })

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ weight: "500", subsets: ["latin"] });

const AboutMe = () => {

  return (
    <section
  >
      <Card className="p-5 md:p-10">
      <p className={`text-sm text-justify mb-3 ${anta.className}`}>
        a final-year computer science student exploring the vastness of frontend
        and making visually appealing websites! My journey started with a simple
        curiosity about how websites work, and now it has turned into a full-on
        passion for creating smooth, interactive user experiences.
      </p>
      <p className={`text-sm text-justify mb-3 ${anta.className}`}>
        I love turning ideas into aesthetic, responsive websites that just feel
        right to use. Whether it is tweaking the tiniest detail or making sure
        everything works seamlessly across devices, I&apos;m all about the user
        experience and making myself a better coder by each line of code!
      </p>
      </Card>
    </section>
  );
};

export default AboutMe;
