"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import transferDkg from "@/assets/images/transfer-dkg.png";
import licenseKey from "@/assets/images/license-key.png";
import onChainImage from "@/assets/images/onchain.png";
import swapImage from "@/assets/images/swap-exchange.png";
import kycImage from "@/assets/images/kyc.png";
import topLeftRM from "@/assets/images/roadmap-top-left.png";
import middleRM from "@/assets/images/roadmap-middle.png";
import bottomLeftRM from "@/assets/images/roadmap-bottom-left.png";
import { motion, Variants, useInView, useAnimation } from "framer-motion";

const STEPS = [
  {
    id: 1,
    label: "Transfer DKG governance rights to DAO",
    image: transferDkg,
    passed: true,
  },
  {
    id: 2,
    label: "Upgrade the DAO to the private vote DAO",
    image: licenseKey,
    passed: false,
  },
  {
    id: 3,
    label: "KYC onchain use ZkML",
    image: onChainImage,
    passed: false,
  },
  {
    id: 4,
    label: "The aggregator for Swap feature",
    image: swapImage,
    passed: false,
  },
  {
    id: 5,
    label: "KYC onchain use ZkML",
    image: kycImage,
    passed: false,
  },
];

const RoadMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const fadedRightInVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visibleRightIn: { opacity: 1, x: 0 },
  };

  const fadedLeftInVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visibleLeftIn: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visibleRightIn");
      mainControls.start("visibleLeftIn");
    }
  }, [isInView]);

  return (
    <div className="w-full relative z-[1]">
      <div className="absolute left-0 -top-60 z-0">
        <Image alt="top-left" src={topLeftRM} />
      </div>
      <div className="absolute z-0 right-0 top-1/2 -translate-y-1/2">
        <Image alt="middle" src={middleRM} />
      </div>
      <div className="absolute left-0 -bottom-60 z-0">
        <Image alt="bottom-left" src={bottomLeftRM} />
      </div>
      <div className="relative md:mt-27 mt-16 z-[1]">
        <div className="md:mt-20 mt-5 md:pt-[70px] pt-10 2xl:w-[1440px] w-full mx-auto z-[1]">
          <h2 className="font-bold text-xl leading-[57px] text-center">
            Road Map
          </h2>
          <div className=" 2xl:mx-[181px] xl:mx-20 mx-10" ref={ref}>
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`flex xl:h-[460px] md:h-80 h-60 justify-center ${
                  step.id % 2 === 0 ? "flex-row-reverse " : ""
                } items-center sm:gap-x-[61px] gap-x-4 relative z-[1]`}
              >
                <motion.div
                  initial="hidden"
                  variants={
                    step.id % 2 === 0
                      ? fadedLeftInVariants
                      : fadedRightInVariants
                  }
                  transition={{
                    duration: 1.5,
                  }}
                  animate={mainControls}
                  className="shrink-0 bg-[rgba(255,255,255,.5)] flex items-center justify-center xl:py-[60px] md:py-10 py-4 xl:px-[103px] md:px-10 px-4 border border-gray rounded-[40px] relative z-10"
                >
                  <Image
                    src={step.image}
                    alt="step"
                    className="xl:w-60 xl:h-60 sm:w-32 sm:h-32 ssm:w-24 ssm:h-24 w-16 h-16"
                  />
                </motion.div>
                <div className="h-full relative">
                  <div
                    className={`absolute w-1 ${
                      step.id !== 1 && step.id !== STEPS.length
                        ? "h-full"
                        : "h-1/2"
                    }  ${step.id === 1 && "bottom-0"} ${
                      step.id === STEPS.length && "top-0"
                    } ${
                      step.passed ? "bg-primary" : "bg-strong-gray"
                    } left-1/2 -translate-x-1/2 z-0`}
                  ></div>
                  <div
                    className={`shrink-0 sm:w-[60px] sm:h-[60px] h-10 w-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ${
                      step.passed
                        ? "bg-primary text-white"
                        : "bg-strong-gray text-silver"
                    } rounded-full flex items-center justify-center relative z-[1]`}
                  >
                    <span className="sm:text-2md text-base font-bold ">{`0${step.id}`}</span>
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  variants={
                    step.id % 2 === 0
                      ? fadedRightInVariants
                      : fadedLeftInVariants
                  }
                  transition={{
                    duration: 1.5,
                  }}
                  animate={mainControls}
                >
                  <div className="font-bold xl:text-lg xl:leading-[38px] md:text-2md sm:text-md ssm:text-base text-sm md:text-start text-center leading-[38px] 2xl:w-[448px] xl:w-[448px] md:w-[210px] sm:w-[162px] ssm:w-[130px] w-[98px]">
                    {step.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
