"use client";

import DropdownNav from "@/components/Dropdown";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full px-2 mb-3">
      <DropdownNav />

      <h1 className={`font-wasted-vindey mt-2 text-lg md:text-3xl`}>
        amna&apos;s website
      </h1>
    </div>
  );
};

export default NavBar;
