"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircleArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";
import Chatbot from "@/public/images/robot_chatbot.png";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import FormFieldItem from "@/components/form-field-item";

const formSchema = z.object({
  name: z.string(),
  subject: z.string().min(5),
  email: z.string().email(),
  message: z.string().max(2000),
});

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      name: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      setTimeout(() => {
        console.log("Message sent:", values);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="section-bg">
        <div className="section-container md:pt-24">
          <div className="section-heading">
            <div className="flex flex-col items-center gap-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-seaGreen text-transparent bg-clip-text mt-6 text-center">
                Contact Us
              </h1>
              <p className="section-description text-white">
                Have questions or feedback? Your journey is our mission, and
                we’re all about progress—get in touch with us today!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-seaSalt">
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
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="w-full flex flex-col gap-4 group text-night"
                  >
                    <FormFieldItem
                      control={form.control}
                      name="name"
                      label="Name"
                      type="text"
                      placeholder="Name"
                    />
                    <FormFieldItem
                      control={form.control}
                      name="subject"
                      label="Subject"
                      type="text"
                      placeholder="Subject"
                    />
                    <FormFieldItem
                      control={form.control}
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Email"
                    />
                    <FormFieldItem
                      control={form.control}
                      name="message"
                      label="Message"
                      type="textarea"
                      placeholder="What would you like to tell us?"
                    />
                    <Button
                      type="submit"
                      variant={"default"}
                      disabled={isLoading}
                      className="bg-seaGreen w-full gap-2 font-semibold hover:bg-gwaanGreen transition duration-300 mt-2 py-6"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <CircleArrowRight01Icon className="w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
