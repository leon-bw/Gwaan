import FadeInAnimation from "@/components/FadeInAnimation";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { HugeiconsProps } from "hugeicons-react";

type IconCardProps = {
  icon: React.ComponentType<HugeiconsProps>;
  heading: string;
  text: string;
};

const IconCard = ({ icon: Icon, heading, text }: IconCardProps) => {
  return (
    <FadeInAnimation>
      <Card className="p-4 hover:scale-105 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 group">
        <CardContent className="p-2 md:p-6">
          <div className="flex flex-col items-center gap-6 text-center justify-evenly w-full">
            <Icon color="seaGreen" size={36} />
            <CardTitle className="text-lg font-bold text-night/70 group-hover:scale-105 transition duration-300">
              {heading}
            </CardTitle>
            <p className="text-balance">{text}</p>
          </div>
        </CardContent>
      </Card>
    </FadeInAnimation>
  );
};

export default IconCard;
