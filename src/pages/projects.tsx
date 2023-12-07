import Heading from "@/components/heading";
import React from "react";

interface Props {}

const Projects: React.FC<Props> = ({}) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start gap-2.5 bg-brand-dark px-10 py-10 pt-28">
      <Heading>Projects</Heading>
    </div>
  );
};

export default Projects;
