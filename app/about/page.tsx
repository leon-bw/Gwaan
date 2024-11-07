import PageHeader from "@/components/PageHeader";
import CardItem from "@/components/CardItem";
import MemberCard from "@/components/MemberCard";
import {
  UserGroupIcon,
  Layers01Icon,
  CheckmarkBadge02Icon,
} from "hugeicons-react";
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
      <PageHeader
        title="Empowering Fitness for All"
        description="Gwaan means 'Go on' in Jamaican Patois, an invitation to push forward in true island spirit."
      />
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
            {contents.map((item, index) => (
              <CardItem
                key={index}
                icon={item.icon}
                heading={item.heading}
                text={item.text}
              />
            ))}
          </div>
          <div className="pt-24">
            <div className="section-heading">
              <h3 className="section-title pb-4">The Team Behind the Vision</h3>
            </div>
            <div className="flex justify-center items-center p-4 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <MemberCard
                    key={index}
                    image={member.image}
                    name={member.name}
                    position={member.position}
                    quote={member.quote}
                  />
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
