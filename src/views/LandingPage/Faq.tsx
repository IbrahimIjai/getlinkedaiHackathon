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
    <section id="faqs" className="grid lg:grid-cols-2 flex-col md:flex-row gap-4 lg:gap-10 w-full p-[4rem] relative border-b border-border/20">
      
      <Decoration/>
      <FaqAccordion />
       <div className="lg:px-[2rem] flex w-full items-end justify-end">
       <Image
          src={isDesktop? FaqBigImg : FaqSmImg}
          alt="placeHolder image for Faq"
          className="m-auto"
        />
       </div>
      
    </section>
  );
}

const Decoration = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
      <Stars
        src={isDesktop ? stars.purplestarbig : stars.purplestarsmall}
        left={isDesktop ? "10%" : "10%"}
        top={isDesktop ? "25px" : ""}
      />
      {isDesktop &&<Stars
        src={stars.pinkstarbig}
        left="60%" 
        top="320px"
      />}
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "10%" : "10%"}
        bottom={isDesktop ? "25px" : "10px"}
      />
    </>
  );
};
