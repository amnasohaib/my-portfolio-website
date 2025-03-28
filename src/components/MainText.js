import React from "react";

import { Cormorant_Garamond } from "next/font/google";

import MarqueeSlider from "react-marquee-slider";
import { Spacer } from "@nextui-org/react";

const cormorant = Cormorant_Garamond({
  weight: "300",
  style: "italic",
  subsets: ["latin"],
});

const MainText = ({ direction }) => {
  return (
    <div className={`text-[10em] h-60`}>
      <MarqueeSlider velocity={25} direction={direction}>
        <div>
          <span className={cormorant.className}>hi there,</span>

          <span className={`font-aesthetic uppercase`}>welcome </span>

          <span className="font-wasted-vindey">to my website!</span>
        </div>
        <div>
          <span className={cormorant.className}>hi there,</span>

          <span className={`font-aesthetic uppercase`}>welcome </span>

          <span className="font-wasted-vindey">to my website!</span>
        </div>
        <Spacer x={10} />
      </MarqueeSlider>
    </div>
  );
};

export default MainText;
