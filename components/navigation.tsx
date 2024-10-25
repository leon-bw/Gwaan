"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import NavButton from "@/components/navbutton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import HeaderLogo from "@/components/header-logo";
import { Menu } from "lucide-react";
import { Home11Icon } from "hugeicons-react";
import { Agreement02Icon } from "hugeicons-react";
import { LicenseDraftIcon } from "hugeicons-react";
import { InformationCircleIcon } from "hugeicons-react";
import { MessageMultiple02Icon } from "hugeicons-react";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: Home11Icon,
  },
  {
    href: "/partner",
    label: "Partner with Us",
    icon: Agreement02Icon,
  },
  {
    href: "/blog",
    label: "Blog",
    icon: LicenseDraftIcon,
  },
  {
    href: "/about",
    label: "About",
    icon: InformationCircleIcon,
  },
  {
    href: "/contact-us",
    label: "Contact Us",
    icon: MessageMultiple02Icon,
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1023px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="px-6 bg-night border-none pt-8">
          <SheetTitle>
            <HeaderLogo onClick={() => setIsOpen(false)} />
          </SheetTitle>
          <nav className="flex flex-col gap-y-4 pt-12">
            {routes.map((route) => {
              const NavIcons = route.icon;
              return (
                <Button
                  key={route.href}
                  variant={route.href === pathname ? "primary" : "ghost"}
                  onClick={() => onClick(route.href)}
                  className="w-full text-white hover:bg-black hover:text-white hover:translate-x-2 transition duration-300 font-semibold text-sm justify-start pl-4"
                  size="lg"
                >
                  <NavIcons className="mr-4" size={24} />
                  {route.label}
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

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
