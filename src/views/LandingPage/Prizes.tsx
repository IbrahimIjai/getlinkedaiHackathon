"use client";

import Text from "@/components/Text";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import Image from "next/image";
import prize_small from "./images/prize_small.png";
import prize_big from "./images/prize_big.png";
import PrizeGalary from "./components/PrizeGalary";

import roundedflare from "./images/roundedflare.png";
import Glow from "../../components/Glow";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";

export default function Prizes() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div className="flex  flex-col gap-[4.5rem] p-[5rem] relative   items-center bg-black/10  ">
      <Decoration />
      {!isDesktop && (
        <div className="flex flex-col items-center">
          <div className="w-full flex text-center flex-col items-center">
            <Text type="h1" isWhite text="Prizes and" />
            <Text type="h1" text="Rewards" />
            <Text
              type="p"
              isWhite
              text="Highlight of the prizes or rewards for winners and for participants."
            />
          </div>
          <Image src={prize_small} alt="Prize picture" />
        </div>
      )}
      <div className="flex  lg:gap-[3rem] justify-between items-end relative w-full">
        {isDesktop && (
          <Image
            className="hidden lg:inline w-[40%]"
            src={prize_big}
            alt="Prize picture"
          />
        )}
        <PrizeGalary />
      </div>
    </div>
  );
}

const Decoration = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
      <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "350px"}
        height={isDesktop ? "650px" : "350px"}
        top="90px"
        left={isDesktop ? "50px" : "90px"}
        // right="-290px"
      />
      <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "350px"}
        height={isDesktop ? "650px" : "350px"}
        bottom={isDesktop ? "-250px" : "50px"}
        right={isDesktop ? "-390px" : "-290px"}
      />
      <Stars
        src={stars.purplestarsmall}
        left={isDesktop ? "25%" : "15%"}
        top={isDesktop ? "27%" : "10%"}
      />
      {!isDesktop && (
        <Stars src={stars.purplestarsmall} right="15%" top="20%" />
      )}
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "55%" : "15%"}
        top={isDesktop ? "35%" : "50%"}
      />
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "5%" : "15%"}
        top={isDesktop ? "45%" : "50%"}
      />
    </>
  );
};
