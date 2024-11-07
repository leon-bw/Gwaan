import CardItem from "@/components/CardItem";
import { TimeQuarterPassIcon } from "hugeicons-react";
import { CheckmarkCircle03Icon } from "hugeicons-react";
import { BodyPartMuscleIcon } from "hugeicons-react";

const contents = [
  {
    icon: TimeQuarterPassIcon,
    heading: "Train Anytime, No Gear Required",
    text: "Workout anywhere using just your phone’s front camera, no equipment needed. Let AI take care of the tracking, so you can focus on results.",
  },
  {
    icon: CheckmarkCircle03Icon,
    heading: "Real-Time Feedback, Every Rep",
    text: "Take control of your form with instant, feedback. Get corrections as you move, making every rep count towards your fitness goals.",
  },
  {
    icon: BodyPartMuscleIcon,
    heading: "Track Your Progress, See Gains",
    text: "Earn points for every perfectly executed rep and improve your form over time. Take your performance and fitness to the next level.",
  },
];

const Cards = () => {
  return (
    <section className="bg-seaSalt py-24">
      <div className="container px-6 mx-auto max-w-screen-xl md:px-10">
        <div className="section-heading">
          <h2 className="section-title pb-5">Smart fitness, Simplified</h2>
          <p className="section-description mt-5">
            Experience the future of fitness with our AI engine, whether you’re
            at home or on the go.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:gap-8 lg:mt-12">
          {contents.map((item, index) => (
            <CardItem
              key={index}
              icon={item.icon}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
