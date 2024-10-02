import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { History } from "lucide-react";

const contents = [
  {
    icon: History,
    heading: "Train Anytime, No Gear Required",
    text: "Workout anywhere using just your phone’s front camera, no equipment needed. Let AI take care of the tracking, so you can focus on results.",
  },
  {
    icon: CircleCheckBig,
    heading: "Real-Time Feedback, Every Rep",
    text: "Take control of your form with instant, feedback. Get corrections as you move, making every rep count towards your fitness goals.",
  },
  {
    icon: TrendingUp,
    heading: "Track Your Progress, See Gains",
    text: "Earn points for every perfectly executed rep and improve your form over time. Take your performance and fitness to the next level.",
  },
];

const Cards = () => {
  return (
    <section className="bg-seaSalt py-24">
      <div className="container px-4 mx-auto max-w-screen-xl lg:px-10">
        <div className="section-heading">
          <h2 className="section-title">Smart fitness, Simplified</h2>
          <p className="section-description mt-5">
            Experience the future of fitness with our AI engine, whether you’re
            at home or on the go.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 mt-8 lg:flex-row lg:gap-8 lg:mt-12">
          {contents.map((content, index) => (
            <Card
              key={index}
              className="p-4 shadow-night/20 hover:shadow-seaGreen transition ease-in-out duration-300 lg:min-h-80"
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-6 text-center justify-evenly w-full">
                  <content.icon color="seaGreen" size={36} />
                  <CardTitle className="text-lg font-bold text-night/70">
                    {content.heading}
                  </CardTitle>
                  <p className="">{content.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
