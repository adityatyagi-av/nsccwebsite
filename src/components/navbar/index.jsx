'use client'
import { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import Image from "next/image.js";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function App() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const menuItems = [
    {
      "id": 1,
      "link": "/",
      "name": "Home"
    },
    {
      "id": 2,
      "link": "/about",
      "name": "About"
    },
    {
      "id": 3,
      "link": "/projects",
      "name": "Projects"
    },
    {
      "id": 4,
      "link": "/resources",
      "name": "Resources"
    },
    {
      "id": 6,
      "link": "/team",
      "name": "Team"
    },
    {
      "id": 7,
      "link": "/contact",
      "name": "Contact Us"
    },
    {
      "id": 8,
      "link": "/login",
      "name": "Login"
    }
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();

    return () => {
      // Clean up any subscriptions or timers here
    }
  }, [pathname, searchParams]);

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-md pb-1.5"
    >
      <NavbarContent className="flex">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mb-1.5">
          <Image src="/nscclogo.png" width={130} height={90} className="mt-3" alt="image" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex mt-3 gap-9 mb-2" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={item.id}>
            <Link color="foreground" href={item.link}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.id}>
            <Button
              onClick={() => {
                setIsMenuOpen(false);
                closeMenu();
                router.push(item.link);
              }}
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
