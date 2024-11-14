"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import { usePathname, useRouter } from "next/navigation";
import NavButton from "@/components/NavButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import HeaderLogo from "@/components/HeaderLogo";
import { Menu } from "lucide-react";
import {
  Home11Icon,
  Agreement02Icon,
  LicenseDraftIcon,
  InformationCircleIcon,
  MessageMultiple02Icon,
} from "hugeicons-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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
        <SheetTrigger asChild>
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
          <VisuallyHidden.Root>
            <SheetDescription className="pt-4">
              This navigation menu allows you to navigate through different
              sections of the website.
            </SheetDescription>
          </VisuallyHidden.Root>
          <nav className="flex flex-col gap-y-4 pt-12">
            {routes.map(({ href, label, icon }) => {
              const NavIcons = icon;
              return (
                <Button
                  key={href}
                  variant={href === pathname ? "primary" : "ghost"}
                  onClick={() => onClick(href)}
                  className="w-full text-white hover:bg-black hover:text-white hover:translate-x-2 transition duration-300 font-semibold text-sm justify-start pl-4"
                  size="lg"
                >
                  <NavIcons className="mr-4" size={24} />
                  {label}
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
      {routes.map(({ href, label }) => (
        <NavButton
          key={href}
          href={href}
          label={label}
          isActive={pathname === href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
