import React from "react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface MemberCardProps {
  image: StaticImageData;
  name: string;
  position: string;
  quote: string;
}

const MemberCard = ({ image, name, position, quote }: MemberCardProps) => {
  return (
    <Card className="hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 max-w-[280px] md:max-w-[320px] lg:max-w-[400px] overflow-hidden rounded-md group">
      <CardContent className="p-0">
        <div className="flex flex-col items-start w-full">
          <div className="relative overflow-hidden transition duration-300">
            <div className="absolute inset-0 z-10 bg-night/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="h-full w-full flex items-center justify-center text-center translate-y-[50%] group-hover:translate-y-0 duration-300">
                <p className="text-white text-md lg:text-lg italic font-semibold p-6 text-center">
                  {quote}
                </p>
              </div>
            </div>
            <Image
              src={image}
              alt={`${name} - ${position}`}
              className="rounded-t-md group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-1 p-4 justify-center">
            <CardTitle className="text-lg font-semibold text-night/70">
              {name}
            </CardTitle>
            <p className="group-hover:text-seaGreen">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
