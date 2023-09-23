"use client";

import React from "react";
import { Button } from "@/components/shadcn/Button";
import { Herosunderline, HerosHook } from "@/assets/icons";
import Text from "@/components/Text";
import Image from "next/image";

import Hackathon_Guy from "./images/Hackathon_Guy_.png";
import IgnitingText from "./components/IgnitingText";
import HerosLogoText from "./components/HerosLogoText";
import Glow from "../../components/Glow";
import Stars from "@/components/NewStars";

import fullflare from "./images/fullFlare.png";
import flare from "./images/flaree.png";

import { stars } from "@/assets/images";

import mobileFlare from "./images/mobileflareHeros.png";

import useMediaQuery from "@/hooks/useMediaQuery";

export default function HeroPage() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <section className="grid lg:grid-cols-2 pt-20 pb-0  lg:px-[5rem] items-center w-full relative gap-6 md:flex-row border-b border-border/20">
      <Decorations />

      <aside className="lg:hidden mx-auto">
        <IgnitingText />
      </aside>
      <aside className="flex flex-col px-8 gap-4 items-center md:items-start">
        <HerosLogoText />
        <Text
          text="Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize"
          isWhite
          className="max-w-md text-center md:text-left font-normal"
        />
        <Button variant="gradient" className="my-2">
          Register
        </Button>
        <Timer />
      </aside>
      <Image src={Hackathon_Guy} className="w-full" alt="Man on smart glass" />
    </section>
  );
}

const Timer = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-1 items-baseline">
        <Text text="00" isWhite className="font-normal" type="h1" />
        <Text text="H" isWhite />
      </div>
      <div className="flex gap-1 items-baseline">
        <Text text="00" isWhite className="font-normal" type="h1" />
        <Text text="M" isWhite />
      </div>
      <div className="flex gap-1 items-baseline">
        <Text text="00" isWhite className="font-normal" type="h1" />
        <Text text="S" isWhite />
      </div>
    </div>
  );
};

const Decorations = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
      {isDesktop ? (
        <>
          {" "}
          <Glow
            src={flare}
            width="550px"
            height="550px"
            bottom="20px"
            right="1px"
          />
          <Glow
            src={fullflare}
            width="550px"
            height="550px"
            top="0px"
            left="25px"
          />
        </>
      ) : (
        <Glow
          src={mobileFlare}
          top="0px"
          left="0px"
          width="350px"
          height="400px"
        />
      )}

      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        left={isDesktop ? "90px" : "120px"}
        top={isDesktop ? "80px" : "120px"}
      />
      <Stars
        src={isDesktop ? stars.graystarbig : stars.graystarsmall}
        right={isDesktop ?"600px": "80px"}
        top={isDesktop ? "120px" : "130px"}
      />
    </>
  );
};
