"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import firstAbs from "@/assets/images/first-abs.png";
import secondAbs from "@/assets/images/second-abs.png";
import thirdAbs from "@/assets/images/third-abs.png";
import titleTechUnderground from "@/assets/images/ttile-underground.png";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const ABSTRACTION_DATA = [
  {
    id: 1,
    label: "Focus on user control",
    icon: firstAbs,
    description:
      "Empowering user privacy, blender operates within a self-sovereign ecosystem. Users retain complete control over their data, ensuring secure and confidential transactions.",
  },
  {
    id: 2,
    label: "Highlight specific technologies",
    icon: secondAbs,
    description:
      "blender prioritizes user privacy by leveraging cutting-edge cryptographic protocols and privacy-enhancing technologies. This fosters a secure and trustworthy environment for decentralized transactions.",
  },
  {
    id: 3,
    label: "Simple and clear approach",
    icon: thirdAbs,
    description:
      "Built with privacy at its core, blender safeguards user data through innovative technologies and protocols. Experience the security and confidentiality of decentralized transactions within our ecosystem.",
  },
];

const TitleTechnology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants: Variants = {
    hidden: {
      opacity: 0.8,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative w-full z-10">
      <div className="absolute left-0 -top-[80%] -z-10">
        <Image alt="title-tech-underground" src={titleTechUnderground} />
      </div>
      <div className="2xl:w-[1440px] w-full md:mt-27 mt-16 mx-auto xl:px-23 px-10 relative z-[1]">
        <div className="">
          <h2 className="text-center text-xlg font-bold">
            Zero-KnowLedge Technology
          </h2>
          <div className="mt-[14px] mx-auto text-center opacity-40 text-base leading-[26px]">
            <p>Secure transactions, confidential information.</p>
          </div>
          <div
            ref={ref}
            className="md:mt-12 mt-8 flex md:flex-row flex-col md:gap-y-0 gap-y-5 gap-x-2 md:items-start items-center justify-between"
          >
            {ABSTRACTION_DATA.map((item) => (
              <motion.div
                initial="hidden"
                transition={{
                  duration: 1,
                }}
                animate={mainControls}
                variants={variants}
                key={item?.id}
                className="xl:w-[360px] md:w-[340px] sm:w-[400px] w-full flex flex-col items-center justify-center relative z-[1]"
              >
                <Image src={item?.icon} alt="absaction"></Image>
                <h4 className="xl:text-md text-[20px] leading-[30px] font-bold text-center mt-9">
                  {item.label}
                </h4>
                <p className="mt-1 text-base leading-5 text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleTechnology;
