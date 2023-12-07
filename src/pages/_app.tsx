import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { useWindowWidth } from "@react-hook/window-size";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { AppProps } from "next/app";
import Head from "next/head";
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
      <Head>
        <title>Arsallan Shahab - Portfolio</title>
        <meta
          name="description"
          content="Arsallan Shahab is a full stack developer who is passionate about building web applications."
        />
        <meta
          name="keywords"
          content="Arsallan Shahab, Arsallan, Shahab, Arsallan Shahab Portfolio, Arsallan Shahab Website, Arsallan Shahab Developer, Arsallan Shahab Full Stack Developer, Arsallan Shahab Full Stack Developer Portfolio, Arsallan Shahab Full Stack Developer Website, Arsallan Shahab Full Stack Developer Websi
          te Portfolio,Arsalan Shahab, Arsalan, Shahab, Arsalan Shahab Portfolio, Arsalan Shahab Website, Arsalan Shahab Developer, Arsalan Shahab Full Stack Developer, Arsalan Shahab Full Stack Developer Portfolio, Arsalan Shahab Full Stack Developer Website, Arsalan Shahab Full Stack Developer Websi
          te Portfolio, Arsallan Shahab MERN Stack Developer, Arsallan Shahab MERN Stack Developer Portfolio, Arsallan Shahab MERN Stack Developer Website"
        />
        <meta name="author" content="Arsallan Shahab" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#cdfa89" />
        <meta name="msapplication-TileColor" content="#cdfa89" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/favicon/apple-touch-icon.png"
          sizes="180x180" //for apple devices
        />
        <meta property="og:title" content="Arsallan Shahab - Portfolio" />
        <meta
          property="og:description"
          content="Arsallan Shahab is a full stack developer who is passionate about building web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arsallanshahab.me" />
        <meta property="og:site_name" content="Arsallan Shahab - Portfolio" />
        <meta
          property="og:image"
          content="https://www.arsallanshahab.me/favicon/apple-touch-icon.png"
        />
        <link rel="canonical" href="https://www.arsallanshahab.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arsallan_se" />
        <meta name="twitter:creator" content="@arsallan_se" />
        <meta
          name="twitter:title"
          content="Arsallan Shahab - Portfolio"
          key="title"
        />
        <meta
          name="twitter:description"
          content="Arsallan Shahab is a full stack developer who is passionate about building web applications."
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/1705510360294608896/kf8ZR99F_400x400.jpg"
        />
      </Head>
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
