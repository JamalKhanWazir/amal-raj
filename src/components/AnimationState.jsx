import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimationState = () => {
  const [animationsInitialized, setAnimationsInitialized] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  // Initialize animations only once using useLayoutEffect
  useEffect(() => {
    if (!animationsInitialized) {
    //   motion.start();
      setAnimationsInitialized(true);
    }
  }, [animationsInitialized]);

  // Check animation state from localStorage using useEffect
  useEffect(() => {
    const animationPlayedFromStorage =
      localStorage.getItem("animationPlayed") === "true";
    setAnimationPlayed(animationPlayedFromStorage);
  }, []);

  return { animationsInitialized, animationPlayed, setAnimationPlayed };
};

export default AnimationState;
