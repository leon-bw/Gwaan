"use client";

import Link from "next/link";

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
  return (
    <nav className="hidden lg:flex items-center gap-2 overflow-x-auto">
        {routes.map((route) => (
            <Link href={`${route.href}`}>
                {route.label}
            </Link>
        ))}
    </nav>
  );
};

export default Navigation;
