'use client'


import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";

export default function ResourcesDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
         variant="none"
         size="lg"
         className="mx-0 px-0"
        >
          Resources
        </Button>
      </DropdownTrigger>
      <DropdownMenu >
      <DropdownItem key="dsa"><Link href="resources/dsa">DSA</Link></DropdownItem>
      <DropdownItem key="uiux"><Link href="resources/uiux">UI / UX</Link ></DropdownItem>
        <DropdownItem key="webdev"><Link href="resources/webdev">Web Development</Link></DropdownItem>
        <DropdownItem key="android"><Link href="resources/android">Android Development</Link></DropdownItem>
        <DropdownItem key="aiml"><Link href="resources/aiml">AI / ML</Link></DropdownItem>
        <DropdownItem key="arvr"><Link href="resources/arvr">AR / VR</Link></DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
}