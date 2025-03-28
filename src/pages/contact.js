import { Link, Spacer } from "@nextui-org/react";

import { motion } from "framer-motion";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ weight: "500", subsets: ["latin"] });

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import Icon from "@/components/icon";

const ContactMe = () => {
  return (
    <div className={`justify-center bg-background text-center pt-40 `}>
      <section id="contact">
        <h1 className={`${cormorant.className} text-4xl text-white`}>
          contact info
        </h1>
        <Spacer y={10} />
        <div className="flex justify-center space-x-4">
          <Link
            href="mailto:amnasohaib2003@gmail.com"
            className="text-white text-2xl"
          >
            <Icon icon={<FaEnvelope />} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/amna-sohaib-430a6b25b/"
            className="text-white text-2xl"
          >
            <Icon icon={<FaLinkedin />} />
          </Link>

          <Link
            href="https://github.com/amnasohaib"
            className="text-white text-2xl"
          >
            <Icon icon={<FaGithub />} />
          </Link>
        </div>

        <Spacer y={10} />
        <div className="pb-40">
          <motion.div
            whileHover={{ rotate: -5, cursor: "pointer" }}
            whileTap={{ rotate: -10 }}
          >
            <motion.a
              href="/myCV.pdf"
              download="Amna Sohaib's CV"
              className={` text-sm bg-white text-background p-3 rounded-full`}
            >
              Download My CV
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
