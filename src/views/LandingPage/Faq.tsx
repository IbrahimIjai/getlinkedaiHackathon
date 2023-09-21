"use client";

import Image from "next/image";
import React from "react";
import FaqBigImg from "./images/FaqTagLg.png";
import FaqSmImg from "./images/FaqTagSm.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaqAccordion } from "./components/FaqAccordion";
export default function Faq() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <section className="flex flex-col md:flex-row gap-4 lg:gap-8 p-8 w-full">
      <FaqAccordion />
      {isDesktop ? (
        <Image
          src={FaqBigImg}
          alt="placeHolder image for Faq"
          className="m-auto"
        />
      ) : (
        <Image
          src={FaqSmImg}
          alt="placeHolder image for Faq"
          className="m-auto"
        />
      )}
    </section>
  );
}
