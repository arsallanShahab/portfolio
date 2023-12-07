import Heading from "@/components/heading";
import Link from "next/link";
import React from "react";

type Props = {};

export default function WhoAmI({}: Props) {
  return (
    <div className="flex w-full flex-col gap-2.5 items-start min-h-screen justify-between px-10 py-10 pb-20 bg-[#0e0218]">
      <div className="pt-24 flex w-full justify-end">
        <p className="text-white text-3xl text-right max-w-6xl pr-5 leading-[1.75] font-roboto-mono relative">
          a full stack debeveloper from India who loves to build things for the
          web. I develop exceptional websites and web apps that provide
          intuitive, pixel-perfect user interfaces with efficient and modern
          backends. I am currently pursuing my Bachelors in Computer Science
          from{" "}
          <Link
            href="https://futureeducation.in/fiem/"
            target="_blank"
            className="text-white hover:text-brand-light-green duration-150 relative group underline"
          >
            Future Institute of Engineering and Management
          </Link>
          . I am also a{" "}
          <Link
            href="https://www.coursera.org/professional-certificates/google-it-automation"
            className="text-white hover:text-brand-light-green duration-150 group relative break-words w-full"
          >
            Google IT Automation with Python Professional Certificate
            {/* <span className="absolute bottom-0 right-0 mb-6 bg-brand-light-green text-white text-xs px-1 rounded-full">
            {" "}
            NEW{" "}
          </span> */}
          </Link>{" "}
          holder.
        </p>
      </div>
      <Heading className="text-white">
        <span className="text-brand-light-green">Who</span> am I?
      </Heading>
    </div>
  );
}
