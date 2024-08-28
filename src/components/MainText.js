import React from "react";

import { Orbitron } from "next/font/google";

import MarqueeSlider from "react-marquee-slider";
import { Spacer } from "@nextui-org/react";

const orbitron = Orbitron({ weight: "500", subsets: ["latin"] });

const MainText = ({ direction }) => {
  return (
    <div className={`${orbitron.className} text-9xl h-60`}>
      <MarqueeSlider velocity={20} direction={direction}>
        <div> hi there, welcome to my website!</div>
        <Spacer x={10} />
        <div> hi there, welcome to my website!</div>
        <Spacer x={10} />
      </MarqueeSlider>
    </div>
  );
};

export default MainText;
