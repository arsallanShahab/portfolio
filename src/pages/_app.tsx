import { spring, useVariants } from "@/components/mouse-config";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { useWindowWidth } from "@react-hook/window-size";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const container = {
  hidden: {
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
    },
  },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

//scale from 0 to 1 and back
const item = {
  hidden: {
    scaleY: 0,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 0.65,
    },
  },
  show: {
    scaleY: 1,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 1.2,
    },
  },
};

const DATASET_ENUMS = {
  DEFAULT: "default",
  LINK: "link",
  VIDEO: "video",
};

const sentences = [
  [
    { word: "a", color: "bg-gray-900" },
    { word: "software", color: "bg-gray-700" },
    { word: "engineer", color: "bg-gray-500" },
  ],
  [
    { word: "a full", color: "bg-[#0e0218]" },
    { word: "stack", color: "bg-[#480878]" },
    { word: "developer", color: "bg-[#810ed8]" },
  ],
  [
    { word: "passionate", color: "bg-[#190009]" },
    { word: "frontend", color: "bg-[#7d022b]" },
    { word: "developer", color: "bg-[#e2044d]" },
  ],
  [
    //generate for backend developer in 3 words and 3 colors
    { word: "java, nodejs", color: "bg-[#0f1801]" },
    { word: "backend", color: "bg-[#4c7a05]" },
    { word: "developer", color: "bg-[#88dc09]" },
  ],
  [
    { word: "mern", color: "bg-[#000814]" },
    { word: "stack", color: "bg-[#003380]" },
    { word: "developer", color: "bg-[#005ce6]" },
  ],
];

const SHAPES = [
  "polygon(50% 0%, 0% 100%, 100% 100%)",
  "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  "circle(50% at 50% 50%)",
  "ellipse(49% 29% at 50% 50%)",
];

const COLORS = [
  //light colors
  "#ff0000",
  "#ff8000",
  "#ffff00",
  "#80ff00",
  "#00ff00",
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [basePath, setBasePath] = useState(router.pathname);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const trailer = useRef<HTMLDivElement>(null);

  const winodwWidth = useWindowWidth();

  const randomSentence = () => {
    setSentenceIndex(Math.floor(Math.random() * sentences.length));
  };
  useEffect(() => {
    if (router.pathname !== basePath) {
      randomSentence();
      setBasePath(router.pathname);
    }
  }, [router.pathname, basePath]);

  const handleMouseMove = (e: MouseEvent) => {
    if (!trailer.current) return;

    let interactables: HTMLElement | null;
    let interacting: boolean = false;

    const x = e.clientX - trailer.current.offsetWidth / 2 + 20;
    const y = e.clientY - trailer.current.offsetHeight / 2 + 20;

    if (trailer.current) {
      if (e.target instanceof HTMLElement) {
        interactables = e.target.closest(".interactable") as HTMLElement;
        interacting = interactables !== null;
        trailer.current.dataset.type = interacting
          ? interactables.dataset.type
          : "default";
      }

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`,
      };

      for (let i = 0; i < 3; i++) {
        const dot: HTMLDivElement = document.createElement("div");
        dot.classList.add("dot");
        dot.style.left = `${e.clientX - dot.offsetWidth - 10}px`;
        dot.style.top = `${e.clientY - dot.offsetHeight - 10}px`;

        document.body.appendChild(dot);

        dot.animate(
          [
            {
              opacity: 1,
              transform: "scale(1)",
            },
            {
              // opacity: 0,
              transform: "scale(0)",
            },
          ],
          {
            duration: i * 300,
            fill: "forwards",
          },
        ).onfinish = () => {
          dot.remove();
        };
      }

      trailer.current.animate(keyframes, {
        duration: 400,
        fill: "forwards",
      });
    }
  };

  useEffect(() => {
    if (trailer.current && winodwWidth > 768) {
      console.log(winodwWidth, "width");
      window.onmousemove = handleMouseMove;
    }

    return () => {
      window.onmousemove = null;
    };
  }, [trailer]);

  return (
    <AnimatePresence mode="wait">
      <div ref={trailer} id="trailer" className="trailer">
        <div id="trailer-icon" data-type="link">
          <ArrowUpRight size={9} className="text-brand-dark-shade-light-2" />
        </div>
        <div id="trailer-icon" data-type="skill"></div>
      </div>

      <motion.div
        key={router.pathname}
        variants={container}
        initial="show"
        animate="hidden"
        exit="show"
        className="relative"
      >
        <Navbar />
        <Component {...pageProps} />
        <motion.div
          className="fixed inset-0 z-[970] h-full w-full origin-top overflow-hidden"
          variants={item}
        >
          <h1
            className={cn(
              "absolute inset-0 flex h-full w-full items-end justify-start break-all bg-current px-5 py-3 font-pixelify text-7xl font-extrabold text-white duration-1000 sm:text-[9rem]",
              sentences[sentenceIndex][2]?.color,
            )}
          >
            {sentences[sentenceIndex][0]?.word}
          </h1>
        </motion.div>
        <motion.div
          className="fixed inset-0 z-[980] h-full w-full origin-top overflow-hidden"
          variants={item}
        >
          <h1
            className={cn(
              "absolute inset-0 flex h-full w-full items-end justify-start break-all bg-current px-5 py-3 font-pixelify text-7xl font-extrabold text-white duration-1000 sm:text-[9rem]",
              sentences[sentenceIndex][1]?.color,
            )}
          >
            {sentences[sentenceIndex][1]?.word}
          </h1>
        </motion.div>
        <motion.div
          className="fixed inset-0 z-[990] h-full w-full origin-top overflow-hidden"
          variants={item}
        >
          <h1
            className={cn(
              "absolute inset-0 flex h-full w-full items-end justify-start break-all bg-current px-5 py-3 font-pixelify text-7xl font-extrabold text-white duration-1000 sm:text-[9rem]",
              sentences[sentenceIndex][0]?.color,
            )}
          >
            {sentences[sentenceIndex][2]?.word}
          </h1>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
