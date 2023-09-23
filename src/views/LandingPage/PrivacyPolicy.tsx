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

export default function PrivacyPolicy() {

  const policyData = siteConfig.PrivacyPolicy;
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div className="grid items-center lg:grid-cols-2 p-[4rem] relative">
         <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "300px"}
        height={isDesktop ? "650px" : "300px"}
        top={isDesktop ? "250px" : "350px"}
        left={isDesktop ? "-160px" : "-50px"}
      />
      <div className="flex flex-col  items-center lg:items-start gap-6">
        <div className="flex flex-col items-center text-center lg:items-start gap-3">
          <div>
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
      <div>
        <Image
          src={privacybig}
          className="lg:inline hidden"
          alt="A place holder Image"
        />
        <Image
          src={privacysmall}
          className="lg:hidden"
          alt="A place holder Image"
        />
      </div>
    </div>
  );
}
