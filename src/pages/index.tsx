import { ABOUT_ME, ARSALLAN, MUHAMMAD, SHAHAB } from "@/lib/CONSTANTS";
import { framerConfig } from "@/lib/framer-config";
import { randomNum } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

interface Props {}

const Home: FC<Props> = (props) => {
  return (
    <main className={"relative"}>
      <div className="flex h-screen w-full flex-col overflow-hidden bg-brand-dark">
        <div className="flex h-full w-full flex-col-reverse items-start justify-end gap-5 px-5 pb-5 pt-36 sm:flex-col sm:flex-wrap sm:justify-between sm:pt-32">
          <div className="relative flex w-full flex-col items-center justify-end pb-5 text-center leading-[1.75] sm:items-end sm:pr-10 sm:text-right">
            <motion.div
              transition={{
                delay: 8,
                delayChildren: 8.5,
              }}
              className="relative flex max-w-xl flex-wrap justify-center text-center font-bricolage text-xl tracking-wide sm:justify-end sm:text-right"
            >
              {ABOUT_ME.map((letter, index) => {
                if (letter === " ") {
                  return (
                    <motion.p
                      key={index}
                      className="relative text-sm leading-[2] text-white "
                    >
                      &nbsp;
                    </motion.p>
                  );
                }
                return (
                  <motion.p
                    key={index}
                    className="relative leading-[2] text-white"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transformOrigin: "bottom",
                      transition: {
                        duration: 0.35,
                        ease: [0.87, 0, 0.13, 1],
                        delay: randomNum(0, ABOUT_ME.length - 1) * 0.01 + 3,
                      },
                    }}
                  >
                    {letter}
                  </motion.p>
                );
              })}
            </motion.div>
            <motion.div
              variants={framerConfig.PARENT_VARIANTS_5}
              initial="initial"
              animate="animate"
              className="mt-5 rounded-3xl bg-brand-light-green px-4 py-1 text-brand-dark"
            >
              <motion.a
                variants={framerConfig.CHILD_VARIANTS_4}
                href="mailto:mdarsallan@gmail.com"
                className="font-bricolage text-base font-bold text-brand-dark"
              >
                mdarsallan@gmail.com
              </motion.a>
            </motion.div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center gap-2.5 pb-5 sm:justify-start sm:px-5">
            <motion.p
              initial="initial"
              animate="animate"
              exit="exit"
              variants={framerConfig.PARENT_VARIANTS_1}
              className="relative flex w-full justify-start text-center font-pixelify leading-[1.75]"
            >
              {MUHAMMAD.map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    className="whitespace-nowrap font-pixelify text-6xl font-extrabold leading-[0.75] text-white sm:pl-3"
                    variants={framerConfig.CHILD_VARIANTS_1}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              initial="initial"
              animate="animate"
              exit="exit"
              variants={framerConfig.PARENT_VARIANTS_2}
              className="flex w-full justify-center sm:justify-start  "
            >
              {ARSALLAN.map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    className="font-pixelify text-[18vw] font-extrabold leading-[0.75] text-brand-light-green sm:text-[18.5vw]"
                    variants={framerConfig.CHILD_VARIANTS_2}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              initial="initial"
              animate="animate"
              exit="exit"
              variants={framerConfig.PARENT_VARIANTS_3}
              className="relative flex w-full justify-end text-center font-pixelify leading-[1.75]"
            >
              {SHAHAB.map((letter, index) => {
                return (
                  <motion.span
                    key={index}
                    variants={framerConfig.CHILD_VARIANTS_3}
                    className="whitespace-nowrap font-pixelify text-6xl font-extrabold leading-[0.75] text-white"
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
