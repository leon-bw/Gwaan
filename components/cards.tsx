import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { History } from "lucide-react";


const contents = [
  {
    icon: History,
    heading: "Train Anytime, No Gear Needed",
    text: "Maximize your workout anywhere using just your phone’s front camera—no equipment required. Let AI take care of the tracking, so you can focus on results.",
  },
  {
    icon: CircleCheckBig,
    heading: "Real-Time AI Feedback, Every Rep",
    text: "Take control of your form with instant, feedback. Get corrections as you move, making every rep count towards your fitness goals.",
  },
  {
    icon: TrendingUp,
    heading: "Track Your Progress, See Your Gains",
    text: "Earn points for every perfectly executed rep and improve your form over time. Watch your performance evolve with data-driven insights.",
  },
];

const Cards = () => {
  return (
    <section className="px-6 my-8 max-w-screen-lg">
      <div className="container mx-auto">
        <h2 className="section-title">Smart fitness, Simplified</h2>
        <p className="section-description mt-5">
          Experience the future of fitness with our AI engine, whether
          you’re at home or on the go.
        </p>
        <div className="flex flex-col gap-8 text-center md:gap-8 md:flex-row mt-6">
          {contents.map((content, index) => (
            <Card key={index} className="p-6 shadow-night/20 border-seaGreen/50">
              <CardContent>
                <p className="mb-2"><content.icon /></p>
                <CardTitle className="mt-4">{content.heading}</CardTitle>
                <p className="mt-6">{content.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
