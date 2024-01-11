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
    { id: 4, link: "/resources", name: "Resources" },
    // { id: 5, link: "/blogs", name: "Blogs" },
    { id: 6, link: "/team", name: "Team" },
    { id: 7, link: "/contact", name: "Contact Us" },
    { id: 8, link: "/join", name: "JOIN" },
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
          <Image
            src="/nscclogo.png"
            width={130}
            height={90}
            className="mt-3"
            alt="image"
          />
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
          <Button as={Link} color="primary" href="/join" variant="flat">
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
