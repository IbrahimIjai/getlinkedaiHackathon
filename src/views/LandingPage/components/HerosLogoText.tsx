import Text from "@/components/Text";
import Image from "next/image";
import React from "react";
import { HomeImages } from "../images";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function HerosLogoText() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 clashDisplayText">
      <div className="flex gap-1">
        <p className="text-[36px] lg:text-[70px]">getlinked</p>
        {/* <Text text="getlinked" className='lg:text-[45px]'  className="lg:"  isWhite type="h1" /> */}
        <div className="relative">
          <p className="text-[36px] lg:text-[70px]">Tech</p>
          {/* <Text text="Tech" className='lg:text-[45px]' isWhite type="h1" /> */}
          <Image
            src={isDesktop ? HomeImages.creativeBig : HomeImages.creativesmall}
            alt="Creative"
            className="absolute -top-[20px] lg:-top-[38px]  right-3 lg:right-8"
          />
        </div>
      </div>
      <div className="flex items-center gap-1 -mt-4 lg:-mt-8">
        <p className="text-[36px] lg:text-[70px]">Hackathon</p>
        <p className="text-[36px] lg:text-[70px] text-primary">1.0</p>
        <Image
          src={isDesktop ? HomeImages.chainBig : HomeImages.chainsmall}
          alt="Chain icon"
          className=""
        />
        <Image
          src={isDesktop ? HomeImages.fireBig : HomeImages.fireSmall}
          alt="Fire icon"
          className=""
        />
      </div>
    </div>
  );
}
