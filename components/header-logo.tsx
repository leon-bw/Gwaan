import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Gwaan_logo.png";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image src={Logo} alt="Gwaan Logo" height={60} width={60} />
    </Link>
  );
};

export default HeaderLogo;
