"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%', // Use the width prop passed or default to 95%
    },
  };

  if (!isClient) {
    return null; // or a loading spinner or any fallback UI
  }

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;