

import DropdownNav from "@/components/Dropdown";
import { Anta } from "next/font/google";

const anta = Anta({ weight: "400", subsets: ["latin"] });

import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full pr-2 mb-5">
    
    <DropdownNav />
    
      <h1 className={`flex align-center ${anta.className} mt-2 text-lg`}>
        Amna&apos;s Website
      </h1>
    </div>
  );
};

export default NavBar;