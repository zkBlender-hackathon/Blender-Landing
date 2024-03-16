"use client";
import { Button, Card } from "@/shared/components";
import React, { Fragment, useRef } from "react";
import Image from "next/image";
import arrowUpRight from "@/assets/icon/arrow-up-right.svg";
import middleUnderground from "@/assets/images/technology-bg.png";
import technologyUnderground from "@/assets/images/technology-underground.png";

const CARD_DATA = [
  {
    id: 1,
    label: "Deposit and withdraw",
    description:
      "Through Blender you can deposit and withdraw any amount of tokens without revealing your transaction history.",
    priBtn: (
      <Button fontStyle="opsans" btnType="primary">
        Launch Blender
      </Button>
    ),
    secondBtn: (
      <div className="flex items-center gap-x-1">
        <Button
          fontStyle="opsans"
          btnType="no-border"
          className="flex items-center gap-x-1 justify-center"
        >
          <div>Read more</div>
          <Image src={arrowUpRight} alt="read-more"></Image>
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    label: "Swap tokens",
    description:
      "Consolidate multiple liquidity sources, providing users real-time access to optimized token prices while upholding top-notch information security standards.",
    priBtn: (
      <Button fontStyle="opsans" btnType="primary">
        Launch Blender
      </Button>
    ),
    secondBtn: (
      <div className="flex items-center gap-x-1">
        <Button
          fontStyle="opsans"
          btnType="no-border"
          className="flex items-center gap-x-1 justify-center"
        >
          <div>Read more</div>
          <Image src={arrowUpRight} alt="read-more"></Image>
        </Button>
      </div>
    ),
  },
  {
    id: 3,
    label: "The DAO",
    description:
      "Participate in a DAO that owns and governs the protocol, where you can vote privately using ZKPs to make decisions that affect the protocol and the community.",
    priBtn: (
      <Button fontStyle="opsans" btnType="primary">
        Comming Soon
      </Button>
    ),
    secondBtn: (
      <div className="flex items-center gap-x-1">
        <Button
          fontStyle="opsans"
          btnType="no-border"
          className="flex items-center gap-x-1 justify-center"
        >
          <div>Read more</div>
          <Image src={arrowUpRight} alt="read-more"></Image>
        </Button>
      </div>
    ),
  },
  {
    id: 4,
    label: "Reveal linking",
    description:
      "Propose to reveal the link between addresses, if necessary, by getting the approval of a majority of a committee.",
    priBtn: (
      <Button fontStyle="opsans" btnType="primary">
        Launch Blender
      </Button>
    ),
    secondBtn: (
      <div className="flex items-center gap-x-1">
        <Button
          fontStyle="opsans"
          btnType="no-border"
          className="flex items-center gap-x-1 justify-center"
        >
          <div>Read more</div>
          <Image src={arrowUpRight} alt="read-more"></Image>
        </Button>
      </div>
    ),
  },
];

const Functionalities = () => {
  const ref = useRef(null);
  return (
    <div className="relative w-full z-[1]">
      <div className="absolute right-0 -top-1/3 z-[-1]">
        <Image alt="title-tech-underground" src={technologyUnderground} />
      </div>
      <div className="2xl:w-[1440px] w-full mx-auto mt-[110px] 2xl:px-30 md:px-16 px-10 relative z-[1]">
        <div>
          <h2 className="text-xl font-bold xl:w-[520px] w-full text-center mx-auto mt-5">
            Blender and ZKP
          </h2>
          <div className="md:mt-[110px] mt-12 relative z-[1]">
            <div
              className="grid xl:grid-cols-2 grid-cols-1 gap-10 relative z-[1]"
              ref={ref}
            >
              {CARD_DATA.map((item, idx) => (
                <Fragment key={item.id}>
                  <Card
                    cardRef={ref}
                    label={item?.label}
                    description={item?.description}
                    priBtn={item?.priBtn}
                    secondBtn={item?.secondBtn}
                  />
                </Fragment>
              ))}
              <div className="absolute top-0 bottom-0 left-10 right-10 z-0 flex items-center justify-center">
                <Image src={middleUnderground} alt="middle-bg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functionalities;
