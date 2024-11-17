import Link from "next/link";
import Image from "next/image";
import {
  NewTwitterIcon,
  InstagramIcon,
  Linkedin02Icon,
  TiktokIcon,
} from "hugeicons-react";
import GwaanLogo from "@/public/images/logos/gwaan_logo_colour.png";

const footerLinks = [
  {
    href: "/partner",
    label: "Partner with Us",
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

const socialLinks = [
  {
    href: "https://twitter.com/gwaanai",
    icon: NewTwitterIcon,
  },
  {
    href: "https://www.instagram.com/gwaan.ai/?hl=en-gb",
    icon: InstagramIcon,
  },
  {
    href: "https://www.tiktok.com/@gwaan.ai",
    icon: TiktokIcon,
  },
  {
    href: "https://www.linkedin.com/company/gwaanai/posts/?feedView=all",
    icon: Linkedin02Icon,
  },
];

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-night text-white/50 text-sm py-6 text-center md:pb-6">
      <div className="container max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-14">
        <div className="bg-white/10 p-4 rounded-xl">
          <div className="inline-flex">
            <Link href="/">
              <Image
                src={GwaanLogo}
                height={30}
                width={30}
                alt="Gwaan logo"
                className="lg:hidden"
              />
            </Link>
          </div>
          <nav className="flex flex-col gap-4 mt-6 md:flex-row md:justify-center md:gap-8 lg:mt-0 lg:flex-col lg:max-w-fit lg:gap-3 lg:text-left">
            <span className="hidden lg:block text-white font-semibold text-sm">
              Useful Links
            </span>
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="footer-route">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center lg:justify-end gap-6 py-6 lg:py-4">
            <span className="hidden text-white font-semibold text-sm lg:flex items-center">
              Follow Us
            </span>
            {socialLinks.map(({ href, icon }) => {
              const SocialIcons = icon;
              return (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="social-icon"
                >
                  <SocialIcons />
                </Link>
              );
            })}
          </div>
          <div className="lg:flex lg:items-center lg:justify-between lg:border-t-2 lg:border-white/20 py-2">
            <Link href="/">
              <Image
                src={GwaanLogo}
                height={30}
                width={30}
                alt="Gwaan logo"
                className="hidden lg:block"
              />
            </Link>
            {/* <p className="text-white/30 text-sm py-3">
              <Link
                href={"https://pngtree.com/thx4stock_34657209?type=1"}
                target="_blank"
              >
                Images from pngtree.com
              </Link>
            </p> */}
            <p className="text-white/30">Eclectic Systems Ltd {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

