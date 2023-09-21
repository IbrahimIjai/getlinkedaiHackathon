"use client";

import Image from "next/image";
import React from "react";
import FaqBigImg from "./images/FaqTagLg.png";
import FaqSmImg from "./images/FaqTagSm.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaqAccordion } from "../components/FaqAccordion";
export default function Faq() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  console.log(isDesktop);

  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 gap-2 lg:gap-8 px-[2.5rem] lg:px-[12rem] py-[7rem] lg:py-[8rem] w-full">
      <FaqAccordion />
      <div className="flex items-center justify-center w-full h-full">
        {isDesktop ? (
          <Image src={FaqBigImg} alt="placeHolder image for Faq" />
        ) : (
          <Image src={FaqSmImg} alt="placeHolder image for Faq" />
        )}
      </div>
    </div>
  );
}
