import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

type SkillType = {
  skill: string;
  level: string;
  description: string;
};

interface SkillsButtonTypes {
  skill: SkillType;
  children?: React.ReactNode;
  variants?: any;
}

const SkillsButton: React.FC<SkillsButtonTypes> = (props) => {
  return (
    <motion.button
      variants={props.variants}
      className="group relative z-10 overflow-hidden rounded-full border-brand-light-green bg-transparent px-5 py-2 font-bricolage text-2xl font-semibold  text-brand-light-green duration-300"
    >
      {props.skill.skill}
      <div className="absolute inset-0 z-20 flex h-full w-full origin-left -translate-x-[102%] scale-y-75 items-center justify-center rounded-full border-[3px] border-brand-light-green bg-brand-light-green px-2 py-1 font-bricolage text-brand-dark duration-200 group-hover:translate-x-0 group-hover:scale-y-100">
        {props.skill.level}
      </div>
    </motion.button>
  );
};

export default SkillsButton;
