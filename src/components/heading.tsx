import { cn, randomNum } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: string;
  className?: string;
};

const PARENT_VARIANTS_1 = {
  initial: {
    transition: {},
  },
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export default function Heading({ children = "", className }: Props) {
  return (
    <div className="flex w-full">
      <motion.h1
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          staggerChildren: 0.1,
        }}
        className={cn(
          "flex py-3 font-pixelify text-5xl font-extrabold leading-[0.75] tracking-tighter text-brand-light-green duration-1000 sm:px-5 sm:text-[9rem]",
          className,
        )}
      >
        {children.split("").map((letter, i) => {
          return (
            <motion.div
              key={i}
              className="relative inline-block"
              variants={{
                initial: {
                  opacity: 0,
                  y: randomNum(-50, 50),
                  x: randomNum(-50, 50),
                  transformOrigin: "left",
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: {
                    duration: 1,
                    ease: [0.87, 0, 0.13, 1],
                    delay: 0.5,
                  },
                },
                exit: {
                  opacity: 0,
                  y: randomNum(-50, 50),
                  x: randomNum(-50, 50),
                  transition: {
                    duration: 1,
                    ease: [0.87, 0, 0.13, 1],
                  },
                },
              }}
            >
              {letter}
            </motion.div>
          );
        })}
      </motion.h1>
    </div>
  );
}
