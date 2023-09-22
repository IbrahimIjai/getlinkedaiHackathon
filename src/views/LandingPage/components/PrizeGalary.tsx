import React from "react";

import bronze_small from "../images/bronze_small.png";
import silver_small from "../images/silver_small.png";
import gold_small from "../images/gold_small.png";
import bronze_big from "../images/bronze_big.png";
import silver_big from "../images/silver_big.png";
import gold_big from "../images/gold_big.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Text from "@/components/Text";

const prizes = [
  {
    position: "2nd",
    prize: "300,000",
    image: {
      desktop: silver_big,
      mobile: silver_small,
    },
    bg: "primary",
  },
  {
    position: "1st",
    prize: "400,000",
    image: {
      desktop: gold_big,
      mobile: gold_small,
    },
    bg: "background",
  },
  {
    position: "3rd",
    prize: "150,000",
    image: {
      desktop: bronze_big,
      mobile: bronze_small,
    },
    bg: "primary",
  },
];

export default function PrizeGalary() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div className="flex mx-auto flex-col w-[90%] lg:w-[55%] gap-[4.5rem] lg:gap-[8.5rem]">
      {isDesktop && <DestopHeader />}
      <div className="flex items-center justify-center w-full gap-3 lg:gap-10 ">
        {prizes.map(({ image, position, prize, bg }) => {
          return (
            <div key={prize} className="md:w-1/2 lg:w-1/3 xl:w-1/4">
              <PriceCard
                src={image}
                position={position}
                prizeAmount={prize}
                bg={bg}
                isDesktop={isDesktop}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const PriceCard = ({
  src,
  position,
  prizeAmount,
  bg,
  isDesktop,
}: {
  src: {
    desktop: any;
    mobile: any;
  };
  position: string;
  prizeAmount: string;
  bg: string;
  isDesktop: boolean;
}) => {
  return (
    <div
      className={`border  rounded-[8px] lg:rounded-[18px]  ${
        position == "1st"
          ? "bg-[#903AFF]/10  border-[#903AFF]"
          : "bg-primary/10 border-primary"
      }  flex flex-col items-center justify-center px-2 pb-[3.5rem] lg:pb-[6rem]`}
    >
      <div className="-mt-[3.5rem] lg:-mt-[6rem] pb-3">
        <Image
          className={`${position == "1st" ? "scale-125" : ""} `}
          src={isDesktop ? src.desktop : src.mobile}
          alt={`${position}st poation`}
        />
        <div
          className={`flex flex-col items-center ${
            position == "1st" ? "pt-8" : ""
          }`}
        >
          <Text type="h1" text={`${position}`} isWhite />
          <Text type="p" text="Runner" isWhite />
          <Text
            type="h1"
            text={`N${prizeAmount}`}
            className={`${
              position == "1st" ? "text-[#903AFF]" : "text-primary"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const DestopHeader = () => {
  return (
    <div className="w-full flex text-start flex-col items-start ">
      <Text type="h1" isWhite text="Prizes and" />
      <Text type="h1" text="Rewards" />
      <Text
        type="p"
        isWhite
        text="Highlight of the prizes or rewards for winners and for participants."
      />
    </div>
  );
};
