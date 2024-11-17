"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormFieldItem from "@/components/FormFieldItem";
import { ArrowRight01Icon } from "hugeicons-react";
import { LoaderCircle } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        console.log("Message sent:", values);
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full flex flex-col gap-4"
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
              <LoaderCircle size={24} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get in Touch
              <ArrowRight01Icon size={24} className="group-hover:translate-x-2 transition duration-300" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
