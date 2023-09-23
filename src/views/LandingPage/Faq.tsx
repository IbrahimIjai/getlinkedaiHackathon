"use client";

import Image from "next/image";
import React from "react";
import FaqBigImg from "./images/FaqTagLg.png";
import FaqSmImg from "./images/FaqTagSm.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaqAccordion } from "./components/FaqAccordion";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";

export default function Faq() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <section className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full p-10  border-b border-border/20">
      
      <Decoration/>
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

const Decoration = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        left={isDesktop ? "90px" : "120px"}
        top={isDesktop ? "80px" : "120px"}
      />
      <Stars
        src={isDesktop ? stars.pinkstarbig : stars.pinkstarsmall}
        right={isDesktop ? "600px" : "80px"}
        top={isDesktop ? "120px" : "130px"}
      />
    </>
  );
};
