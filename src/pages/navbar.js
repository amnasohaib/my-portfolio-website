import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/react";

import { FaBars } from "react-icons/fa6";

import { Anta } from "next/font/google";

const anta = Anta({ weight: "400", subsets: ["latin"] });

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between w-full pr-2 mb-5">
      <Dropdown>
        <DropdownTrigger className="fixed right-0 m-1">
          <Button className="bg-white rounded-full">
            <FaBars />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem >
            <Link href="#about">About Me</Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="#projects">Projects</Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="#contact">Contact Me</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <h1 className={`flex align-center ${anta.className} mt-2 text-lg`}>
        Amna&apos;s Website
      </h1>
    </div>
  );
};

export default NavBar;