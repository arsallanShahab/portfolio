import Navbar from "@/components/navbar";
import { sentences } from "@/lib/CONSTANTS";
import { framerConfig } from "@/lib/framer-config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { useWindowWidth } from "@react-hook/window-size";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [basePath, setBasePath] = useState<String>(router.pathname);
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

    const x: Number = e.clientX - trailer.current.offsetWidth / 2 + 20;
    const y: Number = e.clientY - trailer.current.offsetHeight / 2 + 20;

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
            { transform: "scale(0)" },
          ],
          { duration: i * 300, fill: "forwards" },
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
        <title>
          Arsallan Shahab{" "}
          {router.pathname === "/" ? "" : "| " + router.pathname.slice(1)}
        </title>
      </Head>
      <div ref={trailer} id="trailer" className="trailer">
        <div id="trailer-icon" data-type="link">
          <ArrowUpRight size={9} className="text-brand-dark-shade-light-2" />
        </div>
        <div id="trailer-icon" data-type="skill"></div>
      </div>

      <motion.div
        key={router.pathname}
        variants={framerConfig.APP_ANIMATION_PARENT}
        initial="show"
        animate="hidden"
        exit="show"
        className="relative"
      >
        <Navbar />
        <Component {...pageProps} />
        <motion.div
          className="fixed inset-0 z-[970] h-full w-full origin-top overflow-hidden"
          variants={framerConfig.APP_ANIMATION_CHILD}
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
          variants={framerConfig.APP_ANIMATION_CHILD}
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
          variants={framerConfig.APP_ANIMATION_CHILD}
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
