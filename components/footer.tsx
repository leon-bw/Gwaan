import Link from "next/link";
import HeaderLogo from "./header-logo";
import { NewTwitterIcon } from "hugeicons-react";
import { InstagramIcon } from "hugeicons-react";
import { Linkedin02Icon } from "hugeicons-react";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-night">
      <div className="container">
        <HeaderLogo />
        <div className="">
          <Link href="https://twitter.com/gwaanai" target="_blank">
            <NewTwitterIcon className="text-white" />
          </Link>
          <Link
            href="https://www.instagram.com/gwaan.ai/?hl=en-gb"
            target="_blank"
          >
            <InstagramIcon className="text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/gwaanai/posts/?feedView=all"
            target="_blank"
          >
            <Linkedin02Icon className="text-white" />
          </Link>
        </div>
        <p className="text-white">
          &copy; {currentYear} Gwaan inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
