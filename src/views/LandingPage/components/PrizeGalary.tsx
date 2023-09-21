import React from "react";

import bronze_small from "../images/bronze_small.png";
import silver_small from "../images/silver_small.png";
import gold_small from "../images/gold_small.png";
import bronze_big from "../images/bronze_big.png";
import silver_big from "../images/silver_big.png";
import gold_big from "../images/gold_big.png";
import useMediaQuery from "@/hooks/useMediaQuery";


const prizes = [
    {
        position: 1,
        prize: "400,000",
        image: {
            desktop:gold_big,
            mobile:gold_small
        },
        bg: "background",

    },
    {
        position: 2,
        prize: "300,000",
        image: {
            desktop:silver_big,
            mobile:silver_small
        },
        bg: "primary",
    },
    {
        position: 3,
        prize: "150,000",
        image: {
            desktop:bronze_big,
            mobile:bronze_big
        },
        bg: "primary",
    },
]
export default function PrizeGalary() {
    const isDesktop = useMediaQuery("(min-width:1024px)");
  return (<div></div>);
}

const PriceCard = ({
  src,
  position,
  prizeAmount,
  bg,
  isDesktop
}: {
  src: ;
  position: string;
  prizeAmount: string;
  bg: string;
  isDesktop: boolean;
}) => {
  return (<div className={`border border-primary bg-${bg}/80 `}>
<Image src={isDesktop? src}

  </div>);
};
