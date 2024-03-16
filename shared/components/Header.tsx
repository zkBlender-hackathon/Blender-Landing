"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import banner from "@/assets/images/banner.png";
import { Button } from "@/shared/components";
import rightTopBg from "@/assets/images/top-right-bg.png";
import { Drawer } from "./Drawer";
const HEADER_OPTIONS = [
  {
    id: 1,
    label: "features",
    path: "",
  },
  {
    id: 2,
    label: "community",
    path: "",
  },
  {
    id: 3,
    label: "docs",
    path: "",
  },
];

const HeaderLink = () => {
  return (
    <div className="flex flex-col gap-y-3">
      {HEADER_OPTIONS.map((option) => (
        <div key={option.id} className="capitalize text-base">
          {option.label}
        </div>
      ))}
    </div>
  );
};

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <div className="w-full relative z-[1]">
      <Image
        src={rightTopBg}
        alt="right-top-bg"
        className="xl:block hidden absolute right-0 top-0 z-[0]"
      />
      <div className="2xl:w-[1440px] w-full 2xl:px-[100px] md:px-20 px-10 mx-auto relative z-[1]">
        <div className=" xl:grid xl:grid-cols-12 gap-x-4 flex flex-col">
          <div className="col-start-1 col-end-4 mt-12">
            <div className="flex items-center justify-between">
              <Image src={logo} alt="logo" />
              <div className="xl:hidden hidden lg:flex items-center md:gap-x-6 gap-x-2 w-full justify-end">
                {HEADER_OPTIONS.map((option) => (
                  <a
                    key={option.id}
                    href="#"
                    className="capitalize md:text-base text-sm font-semibold leading-5 hover:text-primary"
                  >
                    {option.label}
                  </a>
                ))}
              </div>

              <div className="block lg:hidden">
                <svg
                  onClick={() => setIsOpenDrawer(true)}
                  width="24px"
                  height="24px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z" />
                </svg>
                <Drawer
                  title=""
                  placement="right"
                  onClose={() => setIsOpenDrawer(false)}
                  open={isOpenDrawer}
                >
                  <HeaderLink />
                </Drawer>
              </div>
            </div>
            <div className="font-bold xl:text-2xl text-xlg xl:text-start text-center text-black xl:mt-[103px] mt-10 xl:mb-0 mb-10">
              The Ultimate Privacy-Preserving Protocol for DeFi
            </div>
          </div>
          <div className="col-span-6 w-full hidden xl:block">
            <div className="w-full flex items-center justify-center"></div>
            <Image src={banner} alt="banner" className="mx-auto"></Image>
          </div>
          <div className="col-start-10 col-end-13 w-[295px] hidden xl:block">
            <div className="mt-12 w-full">
              <div className="xl:flex hidden items-center mt-[6px] gap-x-6 w-full justify-center">
                {HEADER_OPTIONS.map((option) => (
                  <a
                    key={option.id}
                    href="#"
                    className="capitalize text-base font-semibold leading-5 hover:text-primary"
                  >
                    {option.label}
                  </a>
                ))}
              </div>
              <div className="font-bold text-2md text-black mt-[103px]">
                BlenderSwap is not just another protocol for DeFi.
              </div>
              <div className="w-3/4 h-[1px] bg-black my-6 opacity-20"></div>
              <p className="text-base opacity-40 w-[295px] font-medium">
                 It is a game-changer that brings together the best of
                blockchain, privacy, and machine learning to create a new and
                powerful solution for decentralized finance.
              </p>
              <div className="flex items-center gap-x-[14px] mt-[60px]">
                <Button btnType="primary">
                  <div>Launch App</div>
                </Button>
                <Button btnType="secondary">
                  <div>Explore</div>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:flex-row flex-col items-center gap-x-10 relative z-[1]">
            <div className="xl:hidden block">
              <div className="w-full flex items-center justify-center"></div>
              <Image src={banner} alt="banner" className="mx-auto"></Image>
            </div>
            <div className=" xl:hidden block mt-6 text-center">
              <div className="w-full">
                <div className="xl:flex hidden items-center mt-1 gap-x-6 w-full justify-center">
                  {HEADER_OPTIONS.map((option) => (
                    <div
                      key={option.id}
                      className="capitalize text-base font-semibold leading-5 hover:text-primary"
                      onClick={() => console.log("click")}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
                <div className="font-bold text-2md text-black ">
                  BlenderSwap is not just another protocol for DeFi.
                </div>
                <div className="w-3/4 xl:mx-0 mx-auto h-[1px] bg-black my-6 opacity-20"></div>
                <p className="text-base opacity-40 xl:w-[295px] w-full font-medium">
                   It is a game-changer that brings together the best of
                  blockchain, privacy, and machine learning to create a new and
                  powerful solution for decentralized finance.
                </p>
                <div className="flex items-center gap-x-[14px] mt-8">
                  <Button btnType="primary" className="xl:w-auto w-full">
                    <div>Launch App</div>
                  </Button>
                  <Button btnType="secondary" className="xl:w-auto w-full">
                    <div>Explore</div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
