import Heading from "@/components/heading";
import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start gap-2.5 bg-brand-dark px-5 py-10 pt-28 sm:px-10">
      <Heading>Contact</Heading>
    </div>
  );
}

export default Contact;
