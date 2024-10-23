import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logos/Gwaan_logo.png";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="w-16 items-center lg:flex lg:w-24">
        <Image src={Logo} alt="Gwaan Logo" />
      </div>
    </Link>
  );
};

export default HeaderLogo;
