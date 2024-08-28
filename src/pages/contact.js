import { Link, Spacer } from "@nextui-org/react";
import { Anta } from "next/font/google";


const anta = Anta({ weight: "400", subsets: ["latin"] });
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import Icon from "@/components/icon";

const ContactMe = () => {
  return (
    <div id="contact" className={`justify-center bg-background bg-opacity-50 text-center pt-40 `}>
      <section>
        <h1 className={`${anta.className} text-4xl text-white`}>
          contact me
        </h1>
        <Spacer y={10} />
        <div className="flex justify-center space-x-4 pb-40">
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
      </section>
    </div>
  );
};

export default ContactMe;
