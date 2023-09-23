"use client";

import Image from "next/image";
import ReadRules from "./images/ReadRules.png";
import Text from "@/components/Text";
import useMediaQuery from "@/hooks/useMediaQuery";

import roundedflare from "./images/roundedflare.png";
import Glow from "../../components/Glow";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";

export default function Rules() {
  return (
    <section className="grid relative lg:grid-cols-2 gap-5  md:flex-row items-center p-10 border-b border-border/20">
      <Decoration/>
      <Image
        src={ReadRules}
        alt="Girl reading rules"
        className="m-auto md:order-1"
      />
      <aside className="flex lg:pl-[2rem] flex-col items-center md:items-start">
        <Text text="Rules and " type="h3" isWhite />
        <Text text="Guidelines" type="h3" className="mb-5 mt-1" />
        <Text
          text="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
          isWhite
          className="max-w-md text-center md:text-left"
        />
      </aside>
    </section>
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
        top="0px"
        left="20px"
      />
      <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "350px"}
        height={isDesktop ? "650px" : "350px"}
        bottom="50px"
        right="-220px"
      />

      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        left={isDesktop ? "90px" : "120px"}
        top={isDesktop ? "80px" : "120px"}
      />
      <Stars
        src={isDesktop ? stars.graystarbig : stars.graystarsmall}
        right={isDesktop ? "600px" : "80px"}
        top={isDesktop ? "120px" : "130px"}
      />
    </>
  );
};
