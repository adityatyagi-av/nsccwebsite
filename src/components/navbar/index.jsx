"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image.js";

export default function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About" },
    { id: 3, link: "/projects", name: "Projects" },

    { id: 3, link: "/events", name: "Events" },

    { id: 4, link: "/events/code-rush", name: "CodeRush 2.0" },
    // { id: 3, link: "/bootcamp", name: "Bootcamp" },

    { id: 5, link: "/resources", name: "Resources" },
    // { id: 6, link: "/blogs", name: "Blogs" },
    { id: 7, link: "/team", name: "Team" },
    { id: 8, link: "/contact", name: "Contact Us" },
    { id: 9, link: "../registrationClosed", name: "JOIN" },
  ];

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="shadow-md pb-1.5"
    >
      <NavbarContent className="flex">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mb-1.5">
          <Link href="/">
            <Image
              src="/nscclogo.png"
              width={130}
              height={90}
              className="mt-3"
              alt="image"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex mt-3 gap-9 mb-2" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link color="foreground" href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="https://chat.whatsapp.com/Lb5ZABpSEUE9Zuc4vHDTaz" variant="flat">
            JOIN
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full delay-75"
              href={item.link}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
