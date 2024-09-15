"use client";

import { usePathname } from "next/navigation";
import NavButton from "@/components/navbutton";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/trainers",
    label: "Trainers",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
