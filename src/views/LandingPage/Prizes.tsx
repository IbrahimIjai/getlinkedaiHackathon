"use client";

import Text from "@/components/Text";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import Image from "next/image";
import prize_small from "./images/prize_small.png";
import prize_big from "./images/prize_big.png";
import PrizeGalary from "./components/PrizeGalary";

import roundedflare from "./images/roundedflare.png"
import Glow from "../../components/Glow";

export default function Prizes() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div className="flex  flex-col gap-[4.5rem] p-[5rem] relative   items-center bg-black/10  ">
      
      <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "350px"}
        height={isDesktop ? "650px" : "350px"}
        top="90px"
        left={isDesktop? "50px":"90px"}
        // right="-290px"
      />
      <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "350px"}
        height={isDesktop ? "650px" : "350px"}
        bottom={isDesktop? "-250px":"50px"}
        right={isDesktop? "-390px": "-290px"}
      />

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
