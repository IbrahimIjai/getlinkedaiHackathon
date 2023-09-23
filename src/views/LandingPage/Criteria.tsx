"use client";

import Image from "next/image";
import judgeBig from "./images/judgebig.png";
import judgeSmall from "./images/judgesmall.png";
import Text from "@/components/Text";
import { criteriaData } from "./utils/criteriaData";
import { Button } from "@/components/shadcn/Button";
import roundedflare from "./images/roundedflare.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Glow from "../../components/Glow";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";

export default function Criteria() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <section className="grid lg:grid-cols-2 gap-2 p-[3rem] lg:p-[4rem] md:flex-row items-end relative  border-b border-border/20">
      <Decoration />
      <div className="lg:p-[2.3rem]">
        <Image
          src={isDesktop ? judgeBig : judgeSmall}
          alt="Girl reading rules"
          className="m-auto"
        />
      </div>
      <aside className="flex flex-col items-center md:items-start">
        <Text text="Judging Criteria " type="h1" isWhite />
        <Text text="Key attributes" type="h3" className="mb-5 mt-1" />
        <div className="flex flex-col gap-6">
          {criteriaData.map((criteria) => (
            <div
              key={criteria.title}
              className="max-w-[540px] text-center md:text-left"
            >
              <Text text={criteria.title} className="inline" />
              <Text text={criteria.text} isWhite className="inline" />
            </div>
          ))}
        </div>
        <Button className="mt-8">Read More</Button>
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
        width={isDesktop ? "450px" : "350px"}
        height={isDesktop ? "450px" : "350px"}
        top={isDesktop ? "250px" : "45px"}
        left="5px"
      />
      <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "350px"}
        height={isDesktop ? "650px" : "350px"}
        bottom={isDesktop ? "-300px" : "50px"}
        right="-360px"
      />
      <Stars
        src={isDesktop ? stars.purplestarbig : stars.purplestarsmall}
        left={isDesktop ? "180px" : "50%"}
        top={isDesktop ? "40px" : "30px"}
      />
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        left={isDesktop ? "45%" : "50%"}
        top={isDesktop ? "" : "220px"}
        bottom={isDesktop ? "40px" : ""}
      />
      <Stars
        src={isDesktop ? stars.graystarbig : stars.graystarsmall}
        left={isDesktop ? "25%" : "75%"}
        bottom={isDesktop ? "220px" : "15px"}
      />
    </>
  );
};
