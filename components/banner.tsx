import IUKLogo from "@/assets/UKRI_IUK-Logo.png";
import MSFoundersLogo from "@/assets/MS_Startups_FH_logo.png";
import BarclaysLogo from "@/assets/Barclays-ELs.png";
import BSALogo from "@/assets/BSA Logo_Colour_PNG.png";
import CampusLogo from "@/assets/campusfounders.png";
import Image from "next/image";

const logos = [
  { src: IUKLogo, alt: "Innovate UK Logo" },
  { src: MSFoundersLogo, alt: "MS Founders Logo" },
  { src: BarclaysLogo, alt: "Barclays Eagle Labs Logo" },
  { src: BSALogo, alt: "British Science Association Logo" },
  { src: CampusLogo, alt: "Campus Founders Logo" },
];

const Banner = () => {
  return (
    <section className="py-4 md:py-8 bg-seaSalt">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="flex  items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="banner-image"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
