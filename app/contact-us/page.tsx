"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CircleArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";
import Chatbot from "@/public/images/robot_chatbot.png";
import CTA from "@/components/call-to-action";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel className="input-label">Name</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white/10 border-night/40 focus:border-black"
                                type="text"
                                placeholder="Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel className="input-label">
                              Subject
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white/10 border-night/40 focus:border-black"
                                type="text"
                                placeholder="Subject"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel className="input-label">Email</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-white/10 border-night/40 focus:border-black"
                                type="email"
                                placeholder="Email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel className="input-label">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="What would you like to tell us"
                                className="resize-none bg-white/10 h-72 border-night/40 focus:border-black"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
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
      <CTA />
    </>
  );
};

export default ContactUs;
