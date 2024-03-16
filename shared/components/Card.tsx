"use client";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { DM_Sans } from "next/font/google";
import React, { ReactNode, useEffect } from "react";

interface CardProps {
  label: string;
  description: string;
  priBtn: ReactNode;
  secondBtn: ReactNode;
  cardRef?: any;
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const Card = ({
  label,
  description,
  priBtn,
  secondBtn,
  cardRef,
}: CardProps) => {
  const isInView = useInView(cardRef, { once: true });
  const mainControls = useAnimation();

  const cardVariants: Variants = {
    hidden: {
      opacity: 0.5,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      initial="hidden"
      variants={cardVariants}
      transition={{
        duration: 2,
      }}
      animate={mainControls}
      className="px-6 md:py-12 py-8 flex flex-col justify-center items-center bg-[rgba(255,255,255,.5)] border border-gray rounded-xl relative z-[1]"
    >
      <h4
        className={`text-md leading-8 font-medium font-${dmSans.style.fontFamily}`}
      >
        {label}
      </h4>
      <p
        className={`my-5 xl:text-start text-center font-${dmSans.style.fontFamily} text-base leading-5`}
      >
        {description}
      </p>
      <div className="flex 2xl:flex-row flex-col items-center gap-x-4">
        {priBtn}
        {secondBtn}
      </div>
    </motion.div>
  );
};
