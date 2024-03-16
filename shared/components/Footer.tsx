import Image from "next/image";
import React from "react";
import xSocial from "@/assets/icon/xsocial.svg";
import teleSocial from "@/assets/icon/telesocial.svg";
import footerLogo from "@/assets/images/logo-footer.png";

export const Footer = () => {
  return (
    <div className="2xl:w-[1440px] w-full mx-auto 2xl:px-30 xl:px-24 md:px-16 px-10">
      <div className="mt-[75px] flex items-center justify-center">
        <Image src={footerLogo} alt="footer-logo" />
      </div>
      <div className="my-12 flex xl:flex-row flex-col gap-y-4 items-center justify-between text-base font-medium">
        <p className="opacity-70 sm:text-start text-center">
          Copyright © 2024 - All rights reserved by BlenderSwap
        </p>
        <div className="flex items-center gap-6">
          <p>Join the Community</p>
          <a href="#">
            <Image src={xSocial} alt="twitter" />
          </a>
          <a href="#">
            <Image src={teleSocial} alt="tele" />
          </a>
        </div>
      </div>
    </div>
  );
};
