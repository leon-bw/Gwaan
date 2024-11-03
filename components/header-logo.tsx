import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logos/Gwaan_logo.png";

interface HeaderLogoProps {
  onClick?: () => void;
}

const HeaderLogo = ({ onClick }: HeaderLogoProps) => {
  return (
    <Link href="/" onClick={onClick}>
      <div className="w-16 items-center lg:flex lg:w-24">
        <Image src={Logo} alt="Gwaan Logo" priority />
      </div>
    </Link>
  );
};

export default HeaderLogo;
