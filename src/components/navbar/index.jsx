"use client"
import React from "react";

import { Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, Button, Link} from "@nextui-org/react";

import Image from "next/image.js";
// import Link from "next/link";

import { useRouter } from 'next/navigation'


export default function App() {
  const router=useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };
  const menuItems = [
    
    {
      "id":1,
      "link":"/",
      "name":"Home"
    },
    {
      "id":2,
      "link":"/about",
      "name":"About"
    },
    {
      "id":3,
      "link":"/projects",
      "name":"Projects"
    },
    {
      "id":4,
      "link":"/resources",
      "name":"Resources"
    },
    // {
    //   "id":5,
    //   "link":"/blogs",
    //   "name":"Blogs"
    // },
    {
      "id":6,
      "link":"/team",
      "name":"Team"
    },
    {
      "id":7,
      "link":"/contact",
      "name":"Contact Us"
    },
    {
      "id":8,
      "link":"/bootcamp",
      "name":"Register"
    },

  ];

  return (
    <Navbar 
    maxWidth="xl"
    onMenuOpenChange={setIsMenuOpen} 
    className="shadow-md pb-1.5"
    >
    
      <NavbarContent className="flex ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mb-1.5">
          <Image src="/nscclogo.png" width={130} height={90} className="mt-3" alt="image"/>
          
        </NavbarBrand>
      </NavbarContent>
    

      <NavbarContent className="hidden sm:flex mt-3 gap-9 mb-2" justify="center">
        
      <NavbarItem>
          <Link color="foreground" href="/" >
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="/projects" color="foreground">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem >
        <Link href="/resources" color="foreground">
          Resources</Link>
        </NavbarItem>
        
        <NavbarItem >
          <Link href="/team" color="foreground">
            Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"  href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="/bootcamp" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.id} onClick={toggleMenu}>
            <Link 
            onClick={()=>{
              setIsMenuOpen(false)
              router.push(`${item.link}`)
            }
            }
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
