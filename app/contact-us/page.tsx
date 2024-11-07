import Image from "next/image";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Chatbot from "@/public/images/robot_chatbot.png";

const ContactUs = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Have questions or feedback? Your journey is our mission, and we’re all about progress—get in touch with us today!"
      />
      <section className="bg-seaSalt">
        <div className="section-container lg:py-24">
          <h2 className="section-title pb-6 lg:mb-5">
            What can we help you with?
          </h2>
          <div className="grid grid-cols-1 ">
            <Card className="grid md:grid-cols-2 p-6 text-night transition duration-300 lg:px-10 md:gap-4 lg:gap-6">
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={Chatbot}
                  alt="AI Robot chatbot"
                  className="hidden md:flex  md:max-w-xs lg:max-w-sm"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <ContactForm />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
