import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/gwaanai_logo.png"

const HeaderLogo = () => {
  return (
    <Link href="/">
        <Image src={Logo} alt="Gwaan Logo" height={40} width={40} />
    </Link>
  )
}

export default HeaderLogo