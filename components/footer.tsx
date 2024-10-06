import Link from "next/link";
import Image from "next/image";
import { NewTwitterIcon } from "hugeicons-react";
import { InstagramIcon } from "hugeicons-react";
import { Linkedin02Icon } from "hugeicons-react";
import { TiktokIcon } from "hugeicons-react";
import GwaanLogo from "@/assets/gwaan_logo_colour.png";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-night text-seaSalt text-sm py-10 text-center md:pb-6">
      <div className="container mx-auto">
        <div className="border-t-2 border-white/20 py-6 mx-5">
          <div className="inline-flex">
            <Link href="/">
              <Image
                src={GwaanLogo}
                height={30}
                alt="Gwaan logo"
                className="lg:hidden"
              />
            </Link>
          </div>
          <nav className="flex flex-col gap-4 mt-6 md:flex-row md:justify-center md:gap-8 lg:mt-0">
            <Link href="/trainers" className="hover:underline">
              Trainers
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
          </nav>
          <div className="flex justify-center gap-6 py-8 lg:pb-0">
            <Link
              href="https://twitter.com/gwaanai"
              target="_blank"
              className="social-icon"
            >
              <NewTwitterIcon />
            </Link>
            <Link
              href="https://www.instagram.com/gwaan.ai/?hl=en-gb"
              target="_blank"
              className="social-icon"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.tiktok.com/@gwaan.ai"
              target="_blank"
              className="social-icon"
            >
              <TiktokIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/company/gwaanai/posts/?feedView=all"
              target="_blank"
              className="social-icon"
            >
              <Linkedin02Icon />
            </Link>
          </div>
          <div className="lg:flex lg:items-center lg:justify-between lg:max-w-screen-xl mx-auto">
            <p className="text-white/30">Eclectic Systems Ltd {currentYear}</p>
            <Link href="/">
              <Image
                src={GwaanLogo}
                height={30}
                alt="Gwaan logo"
                className="hidden lg:block"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
