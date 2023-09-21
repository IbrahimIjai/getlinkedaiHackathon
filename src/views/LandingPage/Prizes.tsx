"use client";

import Text from "@/components/Text";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";
import Image from "next/image";
import prize_small from "./images/prize_small.png";
import prize_big from "./images/prize_big.png";

export default function Prizes() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div className="flex flex-col items-center">
      {!isDesktop && (
        <div>
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

        <div>
            <Image className="hidden lg:inline" src={prize_big} alt="Prize picture"/>
            
        </div>

    </div>
  );
}
