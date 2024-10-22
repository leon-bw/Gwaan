import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { UserGroupIcon } from "hugeicons-react";
import { Layers01Icon } from "hugeicons-react";
import { CheckmarkBadge02Icon } from "hugeicons-react";
import photo01 from "@/assets/pearce.png";
import photo02 from "@/assets/laboni.png";
import photo03 from "@/assets/lj.png";
import { useState } from "react";

const contents = [
  {
    icon: UserGroupIcon,
    heading: "A Connected Community",
    text: "Our mission is to unite communities across fitness, AI, and engineering, creating a supportive environment where everyone can access advanced tools to achieve their goals.",
  },
  {
    icon: Layers01Icon,
    heading: "Effortless Integration",
    text: "We’re creating a seamless experience by connecting apps and services in a single fitness hub, so users can manage all aspects of their training journey with ease.",
  },
  {
    icon: CheckmarkBadge02Icon,
    heading: "Excellence in Training",
    text: "With certified trainers and a commitment to cutting-edge fitness science, we provide a reliable, results-driven service that brings professional expertise to everyone.",
  },
];

const team = [
  {
    image: photo01,
    name: "Pearce",
    position: "CEO & Machine Learning Engineer",
  },
  {
    image: photo02,
    name: "Laboni",
    position: "Product Research Officer",
  },
  {
    image: photo03,
    name: "LJ",
    position: "Lead Trainer",
  },
];

const About = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <>
      <section className="section-bg">
        <div className="section-container md:pt-24">
          <div className="section-heading">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text-center">
                Empowering Fitness for All
              </h1>
              <p className="section-description text-white">
                Gwaan means 'Go on' in Jamaican Patois, an invitation to push
                forward in true island spirit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <article className="bg-seaSalt">
        <div className="section-container lg:py-24">
          <div className="section-heading">
            <h2 className="section-title pb-4">
              Where Culture Meets Innovation
            </h2>
            <p className="section-description text-night">
              Founded in Brixton, London’s Caribbean hub, Gwaan combines the
              spirit of community and progress. With a nod to our founder's
              heritage, We’re committed to making advanced training technology
              accessible to everyone, empowering all to embrace fitness without
              limits.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 lg:gap-8 lg:mt-12">
            {contents.map((content, index) => (
              <Card
                key={index}
                className="p-4 hover:scale-105 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 lg:min-h-64"
              >
                <CardContent className="p-2 md:p-6">
                  <div className="flex flex-col items-center gap-6 text-center justify-evenly w-full">
                    <content.icon color="seaGreen" size={36} />
                    <CardTitle className="text-lg font-bold text-night/70">
                      {content.heading}
                    </CardTitle>
                    <p>{content.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="pt-24">
            <div className="section-heading">
              <h3 className="section-title pb-4">The Team Behind the Vision</h3>
            </div>
            <div className="flex justify-center items-center p-4 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden hover:scale-105 hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 max-w-[280px] md:max-w-[320px] lg:max-w-[400px] rounded-e-xl"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col items-start w-full hover:text-seaGreen">
                        {showOverlay && (
                          <div className="absolute inset-0 z-10 flex justify-center items-center">
                            <div className="absolute bg-night/50 h-full w-full" />
                          </div>
                        )}
                        <Image
                          src={member.image}
                          alt="Gwaan team member"
                          className="transition duration-300 rounded-t-md"
                        />
                        <div className="flex flex-col gap-1 p-4 justify-center">
                          <CardTitle className="text-lg font-semibold text-night/70">
                            {member.name}
                          </CardTitle>
                          <p className="">{member.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default About;
