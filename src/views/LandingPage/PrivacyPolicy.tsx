"use client"

import Text from "@/components/Text";
import privacybig from "./images/privacybig.png";
import privacysmall from "./images/privacysmall.png";
import React from "react";
import { siteConfig } from "@/config/site";

import { GreenCheckMark } from "@/assets/icons";
import { Button } from "@/components/shadcn/Button";
import Image from "next/image";
import Glow from "../../components/Glow";
import roundedflare from "./images/roundedflare.png"
import useMediaQuery from "@/hooks/useMediaQuery";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";

export default function PrivacyPolicy() {

  const policyData = siteConfig.PrivacyPolicy;
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div className="grid items-center py-[4rem] gap-4 lg:pt-[6rem] lg:px-[4rem] lg:grid-cols-2 relative">
      <Decoration/>
      <div className="flex flex-col px-[3.5rem]  items-center lg:items-start gap-6">
        <div className="flex flex-col items-center text-center lg:items-start gap-3">
          <div className="flex flex-col lg:items-start">
            <Text type="h1" text="Privacy Policy and" isWhite />
            <Text type="h1" text="Terms" />
          </div>
          <Text
            type="p"
            text="Last updated on September 12, 2023"
            className="text-white/75"
          />
          <Text
            type="p"
            text="Below are our privacy & policy, which outline a lot of goodies. its our aim to always take of our participant"
            isWhite
            className="lg:text-start"
          />
        </div>

        <div className="bg-white/5 border border-primary flex flex-col gap-6 items-center text-left p-[2rem] rounded-[5px]">
          <Text type="p" text={policyData.policy} isWhite className="" />
         <div className="">
         <Text type="p" text="Licensing Policy" className="text-left font-bold"/>
          <Text
            type="p"
            text="Here are terms of our Standard License:"
            isWhite
            className="font-bold"
          />
         </div>
          <div className="flex flex-col gap-7 items-start">
            {policyData.standardLicense.map((item, i) => {
              return (
                <div key={i} className="flex items-start gap-2">
                  <GreenCheckMark />
                  <Text type="p" text={item} isWhite />
                </div>
              );
            })}
          </div>
          <Button variant="gradient">Read More</Button>
        </div>
      </div>
      <div className="m-[2rem] flex items-center justify-center">
        <Image
          src={isDesktop? privacybig :privacysmall }
          className="max-w-[560px] max-h-[705px]"
          alt="A place holder Image"
        />
      </div>
    </div>
  );
}

const Decoration = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
       <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "300px"}
        height={isDesktop ? "650px" : "300px"}
        top={isDesktop ? "250px" : "350px"}
        left={isDesktop ? "-160px" : "-50px"}
      />
      <Stars
        src={isDesktop ? stars.purplestarbig : stars.purplestarsmall}
        left={isDesktop ? "2%" : "15%"}
        bottom={isDesktop ? "15%" : "130px"}
      />
      <Stars
        src={isDesktop ? stars.purplestarbig : stars.purplestarsmall}
        left={isDesktop ? "40%" : "15%"}
        top={isDesktop ? "15%" : "130px"}
      />
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "20%" : "15%"}
        top={isDesktop ? "45%" : "50%"}
      />
       <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "20%" : "15%"}
        top={isDesktop ? "45%" : "50%"}
      />
    </>
  );
};
