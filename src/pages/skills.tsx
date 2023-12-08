import Heading from "@/components/heading";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiHeroku,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import React from "react";

interface Props {}

const proSkills = [
  {
    skill: "React.js",
    level: "4.5*",
    description: "I have been using React.js for over 2 years now.",
  },
  {
    skill: "Next.js",
    level: "4.5*",
    description: "I have been using Next.js for over 2 years now.",
  },
  {
    skill: "TailwindCSS",
    level: "4.5*",
    description: "I have been using TailwindCSS for over 2 years now.",
  },
  {
    skill: "Node.js",
    level: "4*",
    description: "I have been using Node.js for over 2 years now.",
  },
  {
    skill: "Express.js",
    level: "4",
    description: "I have been using Express.js for over 2 years now.",
  },
  {
    skill: "MongoDB",
    level: "4",
    description: "I have been using MongoDB for over 2 years now.",
  },
  {
    skill: "PostgreSQL",
    level: "2",
    description: "I have been using PostgreSQL for over 2 years now.",
  },
  // "Redis",
  {
    skill: "GraphQL",
    level: "1",
    description: "I have been using GraphQL for over 2 years now.",
  },
  {
    skill: "TypeScript",
    level: "1",
    description: "I have been using TypeScript for over 2 years now.",
  },
  {
    skill: "Docker",
    level: "1",
    description: "I have been using Docker for over 2 years now.",
  },
  {
    skill: "Kubernetes",
    level: "pro",
    description: "I have been using Kubernetes for over 2 years now.",
  },
  {
    skill: "Google Cloud",
    level: "pro",
    description: "I have been using Google Cloud for over 2 years now.",
  },
  {
    skill: "Digital Ocean",
    level: "pro",
    description: "I have been using Digital Ocean for over 2 years now.",
  },
  {
    skill: "Heroku",
    level: "pro",
    description: "I have been using Heroku for over 2 years now.",
  },
  {
    skill: "Vercel",
    level: "pro",
    description: "I have been using Vercel for over 2 years now.",
  },
  {
    skill: "Netlify",
    level: "pro",
    description: "I have been using Netlify for over 2 years now.",
  },
  {
    skill: "Git",
    level: "pro",
    description: "I have been using Git for over 2 years now.",
  },
  {
    skill: "Github",
    level: "pro",
    description: "I have been using Github for over 2 years now.",
  },
];

const familiarSkills = [
  // "C",
  // "C++",
  // "Java",
  // "Python",
  // "React Native",
  // "Firebase",
  // // "Flutter",
  // // "GraphQL",
  // // "Redis",
  // // "RabbitMQ",
  // // "Kafka",
  // // "NATS",
  // // "Kotlin",
  // // "Flask",
  // // "FastAPI",
  // // "Django",
  // "Spring Boot",
  // // "TypeScript",
];

const PARENT_VARIANT = {
  initial: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  hover: {},
  animate: {
    transition: {
      delayChildren: 0.75,
      staggerChildren: 0.15,
      ease: [0.87, 0, 0.13, 1],
      staggerDirection: 1,
    },
  },
};

const CHILD_VARIANT = {
  initial: {
    // opacity: 0,
    scale: 0,
    x: -100,
    // borderRadius: 100,
    // scale: 0.5,
    transformOrigin: "left",
    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    transition: {
      duration: 0.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
  animate: {
    // opacity: 1,
    scale: 1,
    x: 0,
    // scale: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: {
      duration: 0.75,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const Skills: React.FC<Props> = ({}) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start gap-2.5 bg-[#040405] px-5 py-10 pt-28 sm:px-10">
      <Heading>Skills</Heading>

      <motion.div className="relative flex w-full flex-col sm:p-5">
        <h3 className="flex py-3 font-bricolage text-2xl font-extrabold leading-[0.75] text-white"></h3>
        <motion.div
          initial="initial"
          whileInView="animate"
          exit="initial"
          variants={PARENT_VARIANT}
          className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiPython
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="font-bricolage text-xl font-semibold leading-[0.75]">
              Python
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiReact
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="font-bricolage text-xl font-semibold leading-[0.75]">
              React
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiNextdotjs
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="font-bricolage text-xl font-semibold leading-[0.75]">
              NextJS
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiTailwindcss
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="font-bricolage text-xl font-semibold leading-[0.75]">
              TailwindCSS
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiNodedotjs
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="font-bricolage text-xl font-semibold leading-[0.75]">
              NodeJS
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiExpress
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="font-bricolage text-xl font-semibold leading-[0.75]">
              ExpressJS
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiMongodb
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="white-black font-bricolage text-xl font-semibold leading-[0.75]">
              MongoDB
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiPrisma
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="white-black font-bricolage text-xl font-semibold leading-[0.75]">
              PrismJS
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiGit
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="white-black font-bricolage text-xl font-semibold leading-[0.75]">
              Git
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiGithub
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="white-black font-bricolage text-xl font-semibold leading-[0.75]">
              Github
            </p>
          </motion.div>
          <motion.div
            variants={CHILD_VARIANT}
            style={{
              transition: "background 200ms ease",
            }}
            data-type="skill"
            className="interactable group relative z-[200] flex h-24 w-full cursor-none items-center justify-center gap-2.5 rounded-[4px] bg-white/0 text-white backdrop-blur-xl hover:bg-white/0"
          >
            <SiHeroku
              // color={"default"}
              className="pointer-events-none h-10 w-10"
            />
            <p className="white-black font-bricolage text-xl font-semibold leading-[0.75]">
              Heroku
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
