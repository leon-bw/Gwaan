"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FormFieldItem from "@/components/FormFieldItem";
import PageHeader from "@/components/PageHeader";
import Chatbot from "@/public/images/robot_chatbot.png";
import { ArrowRight01Icon } from "hugeicons-react";
import { Loader2 } from "lucide-react";
import { contactFormSchema } from "@/lib/utils";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "",
      subject: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof contactFormSchema>) => {
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
      <PageHeader
        title="Contact Us"
        description="Have questions or feedback? Your journey is our mission, and we’re all about progress—get in touch with us today!"
      />
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
                    className="w-full flex flex-col gap-4 text-night"
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
                      name="email"
                      label="Email"
                      type="email"
                      placeholder="Email"
                    />
                    <FormFieldItem
                      control={form.control}
                      name="reason"
                      label="Reason for contact"
                      type="Select"
                      placeholder="Select a reason"
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
                      name="message"
                      label="Message"
                      type="textarea"
                      placeholder="What would you like to tell us?"
                    />
                    <Button
                      type="submit"
                      variant={"default"}
                      disabled={isLoading}
                      className="bg-seaGreen w-full gap-2 font-semibold hover:bg-gwaanGreen transition duration-300 mt-2 py-6 group"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Get in Touch
                          <ArrowRight01Icon className="w-6 group-hover:translate-x-3 transition duration-300" />
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
