import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const RandomFadeInText = ({ text }) => {
  const controls = useAnimation();

  let characters = text.split("");
  let shuffledCharacters = characters.slice();

  const createShuffledCharacters = () => {
    shuffleArray(shuffledCharacters);
    return shuffledCharacters;
  };

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    const shuffledCharacters = createShuffledCharacters();

    // Create an array of variants with randomized delays
    const variantsWithDelays = shuffledCharacters.map((char, index) => {
      const delay = Math.random() * 2; // Adjust the delay range as needed
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        transition: { delay },
      };
    });

    // Start the animation
    controls.start({
      variants: variantsWithDelays,
      init: "hidden",
      target: shuffledCharacters,
      animationDelay: 3,
      transitionDelay: 3,
    });
  }, [controls, text]);

  return (
    <motion.div>
      {shuffledCharacters.map((char, index) => (
        <motion.span
          key={index}
          animate={controls}
          className="text-white text-2xl font-bricolage px-0"
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RandomFadeInText;
