"use client";

import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { UserGroupIcon } from "hugeicons-react";
import { Layers01Icon } from "hugeicons-react";
import { CheckmarkBadge02Icon } from "hugeicons-react";
import photo01 from "@/public/images/photos/pearce.png";
import photo02 from "@/public/images/photos/laboni.png";
import photo03 from "@/public/images/photos/lj.png";

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
    quote:
      "'I believe you can code a decent solution for most problems - including a struggling fitness journey'",
  },
  {
    image: photo02,
    name: "Laboni",
    position: "Product Research Officer",
    quote:
      "'Random appreciation: it's so handy that you can wear gym tights on a  Zoom call'",
  },
  {
    image: photo03,
    name: "LJ",
    position: "Lead Trainer",
    quote:
      "'Anyone's a fitness expert nowadays, but at the core of fitness is studying anatomy and how our bodies were supposed to move'",
  },
];

const About = () => {
  return (
    <>
      <section className="section-bg">
        <div className="section-container md:pt-24">
          <div className="section-heading">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text-center onmouse ">
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
                    <p className="text-balance">{content.text}</p>
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
                    className="hover:shadow-night/20 hover:drop-shadow-lg transition duration-300 max-w-[280px] md:max-w-[320px] lg:max-w-[400px] overflow-hidden rounded-md group"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col items-start w-full">
                        <div className="relative overflow-hidden transition duration-500">
                          <div className="absolute inset-0 z-10 bg-night/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="h-full w-full flex items-center justify-center text-center translate-y-[50%] group-hover:translate-y-0 duration-300">
                              <p className="text-white text-md lg:text-lg italic font-semibold p-6 text-center">
                                {member.quote}
                              </p>
                            </div>
                          </div>
                          <Image
                            src={member.image}
                            alt="Gwaan team member"
                            className="rounded-t-md group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col gap-1 p-4 justify-center">
                          <CardTitle className="text-lg font-semibold text-night/70">
                            {member.name}
                          </CardTitle>
                          <p className="group-hover:text-seaGreen">
                            {member.position}
                          </p>
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
