"use client";
import {
  HorizontalSeprators,
  VericalSeperator,
  HorizontalSepratorsMobile,
  VericalSeperatorMobile,
} from "@/assets/icons";
import Image from "next/image";
import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Text from "@/components/Text";
import Glow from "../../components/Glow";
import roundedflare from "./images/roundedflare.png";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";
import { HomeImages } from "./images";

const companyGroupArrayTop: company[] = [
  {
    name: "Liberty Company",
    logos: {
      desktop: HomeImages.libertyCompanyBig,
      mobile: HomeImages.libertyCompanySmall,
    },
    hasButtomBorder: true,
    hasRightBorder: true,
  },

  {
    name: "Liberty Pay",
    logos: {
      desktop: HomeImages.libertyPayBig,
      mobile: HomeImages.libertyPaySmall,
    },
    hasButtomBorder: true,
    hasRightBorder: true,
  },

  {
    name: "Winwise",
    logos: {
      desktop: HomeImages.winwiseBig,
      mobile: HomeImages.winwiseSmall,
    },
    hasButtomBorder: true,
    hasRightBorder: false,
  },
];
const companyGroupArrayButtom: company[] = [
  {
    name: "Whisperms company",
    logos: {
      desktop: HomeImages.whispermBig,
      mobile: HomeImages.whispermSmall,
    },
    hasButtomBorder: false,
    hasRightBorder: true,
  },

  {
    name: "Paybox",
    logos: {
      desktop: HomeImages.payboxBig,
      mobile: HomeImages.payboxSmall,
    },
    hasButtomBorder: false,
    hasRightBorder: true,
  },

  {
    name: "Vizual plus",
    logos: {
      desktop: HomeImages.vizualBig,
      mobile: HomeImages.vizualSmall,
    },
    hasButtomBorder: false,
    hasRightBorder: false,
  },
];

export default function Partners() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div className="w-full p-[3rem] lg:p-[6rem] relative border-b border-border/10">
      <Decoration/>
      <div className="text-center flex flex-col gap-4 mb-8">
        <Text type="h1" text="Partners and Sponsors" isWhite />
        <Text
          type="p"
          text="Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors"
          isWhite
        />
      </div>

      <div className="flex mb-[5rem] lg:mt-4 items-center flex-col gap-[8px]  border border-primary rounded-[6px]  p-[2.5rem] md:p-[3.5rem] lg:p-[5rem]">
        <div className="flex items-center  ">
          {companyGroupArrayTop.map(
            ({ name, logos, hasRightBorder, hasButtomBorder }, i) => {
              return (
                <SingleCompany
                  name={name}
                  logos={logos}
                  hasButtomBorder={hasButtomBorder}
                  hasRightBorder={hasRightBorder}
                  isDesktop={isDesktop}
                  key={i}
                />
              );
            }
          )}
        </div>
        <div className="flex items-center gap-[6px] ml-[12px]">
          {companyGroupArrayButtom.map(
            ({ name, logos, hasRightBorder, hasButtomBorder }, i) => {
              return (
                <SingleCompany
                  name={name}
                  logos={logos}
                  hasButtomBorder={hasButtomBorder}
                  hasRightBorder={hasRightBorder}
                  isDesktop={isDesktop}
                  key={i}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
//neww
interface company {
  name: string;
  logos: {
    desktop: any;
    mobile: any;
  };
  hasRightBorder?: boolean;
  hasButtomBorder?: boolean;
  isDesktop?: boolean;
}
const SingleCompany = ({
  name,
  logos,
  hasRightBorder,
  hasButtomBorder,
  isDesktop,
}: company) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center w-full ">
        <div className="flex mx-[12px] items-center justify-center w-[63px] md:w-[140px] lg:w-[257px] h-[30px] md:h-[70px] lg:h-[122px]">
          <Image
            src={isDesktop ? logos.desktop : logos.mobile}
            alt={name + {} + "Logo"}
          />
        </div>
        {hasRightBorder && (
          <div className="ml-[12px]">
            {isDesktop ? <VericalSeperator /> : <VericalSeperatorMobile />}
          </div>
        )}
      </div>
      {hasButtomBorder && (
        <div>
          {isDesktop ? <HorizontalSeprators /> : <HorizontalSepratorsMobile />}
        </div>
      )}
    </div>
  );
};

const Decoration = () => {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <>
     <Glow
        src={roundedflare}
        width={isDesktop ? "650px" : "300px"}
        height={isDesktop ? "650px" : "300px"}
        bottom={isDesktop ? "-200px" : "-120px"}
        right={isDesktop ? "-200px" : "-120px"}
      />
      <Glow
        src={roundedflare}
        width={isDesktop ? "550px" : "300px"}
        height={isDesktop ? "550px" : "300px"}
        top={isDesktop ? "-50px" : "0"}
        left={isDesktop ? "-80px" : "-30px"}
      />
      <Stars
        src={isDesktop ? stars.purplestarbig : stars.purplestarsmall}
        left={isDesktop ? "5%" : "15%"}
        top={isDesktop ? "10%" : "130px"}
      />
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "50%" : "15%"}
        top={isDesktop ? "70%" : "90%"}
      />
    </>
  );
};

//achive
