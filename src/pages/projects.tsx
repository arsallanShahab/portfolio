import Heading from "@/components/heading";
import { ABOUT_ME_STRING } from "@/lib/CONSTANTS";
import React from "react";
import RandomFadeInText from "../../temp/animate-paragraph";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start gap-2.5 bg-brand-dark px-10 py-10 pt-28">
      <Heading>Projects</Heading>
    </div>
  );
}

export default Projects;
