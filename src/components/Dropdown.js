import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
  } from "@nextui-org/dropdown";

  import { Button } from "@nextui-org/react";

import { FaBars } from "react-icons/fa6";

import Link from "next/link";

const DropdownNav = () => {
    return(
<Dropdown>
        <DropdownTrigger className="fixed right-0 m-1">
          <Button className="bg-background bg-opacity-50 text-white rounded-full">
            <FaBars />
          </Button>
        </DropdownTrigger>
        <DropdownMenu className="text-center">
          <DropdownItem>
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
    )
}

export default DropdownNav;