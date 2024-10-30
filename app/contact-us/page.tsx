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
import { CircleArrowRight01Icon } from "hugeicons-react";
import Image from "next/image";
import Chatbot from "@/public/images/robot_chatbot.png";
import CTA from "@/components/call-to-action";

const formSchema = z.object({
  name: z.string(),
  subject: z.string().min(5),
  email: z.string().email(),
  message: z.string().max(2000),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      name: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
          <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-night shadow-md px-4 lg:px-10 rounded-lg gap-12 max-w-5xl mx-auto w-full">
            <Image
              src={Chatbot}
              alt="AI Robot chatbot"
              className="hidden lg:flex max-w-sm"
            />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-lg w-full flex flex-col gap-4 group text-white"
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
                            className="bg-white/10 focus:border-white/20 border-black"
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
                        <FormLabel className="input-label">Subject</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-white/10 focus:border-white/20 border-black"
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
                            className="bg-white/10 focus:border-white/20 border-black"
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
                        <FormLabel className="input-label">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What would you like to tell us"
                            className="resize-none bg-white/10 h-72 focus:border-white/20 border-black"
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
                  variant={"secondary"}
                  className="w-full gap-2 font-semibold hover:bg-seaGreen hover:text-white transition duration-300 mt-2 py-6"
                >
                  Send Message
                  <CircleArrowRight01Icon className="w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
};

export default ContactUs;
