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

import libertyCompanyLogoBig from "./images/LibertycompanyLogo_big.png";
import libertyCompanyLogoSmall from "./images/LibertycompanyLogo_small.png";

import wispermLogoBig from "./images/wisperLog_big.png";
import wispermLogoSmall from "./images/wisperLog_small.png";

import libertyPayLogBig from "./images/libertypayLogo_big.png";
import libertyPayLogSmall from "./images/libertypayLogo_small.png";

import payboxLogoBig from "./images/payboxLogo_big.png";
import payboxLogoSmall from "./images/payboxLogo_small.png";

import winwiseLogoBig from "./images/WinwiseLogo_big.png";
import winwiseLogoSmall from "./images/WinwiseLogo_small.png";

import visualPlusLogoBig from "./images/visualPlus_big.png";
import visualPlusLogoSmall from "./images/visualPlus_small.png";


const companyGroupArrayTop: company[] = [
  {
    name: "Liberty Company",
    logos: {
      desktop: libertyCompanyLogoBig,
      mobile: libertyCompanyLogoSmall,
    },
    hasButtomBorder: true,
    hasRightBorder: true,
  },

  {
    name: "Liberty Pay",
    logos: {
      desktop: libertyPayLogBig,
      mobile: libertyPayLogSmall,
    },
    hasButtomBorder: true,
    hasRightBorder: true,
  },

  {
    name: "Winwise",
    logos: {
      desktop: winwiseLogoBig,
      mobile: winwiseLogoSmall,
    },
    hasButtomBorder: true,
    hasRightBorder: false,
  },
];
const companyGroupArrayButtom: company[] = [
  {
    name: "Whisperms company",
    logos: {
      desktop: wispermLogoBig,
      mobile: wispermLogoSmall,
    },
    hasButtomBorder: false,
    hasRightBorder: true,
  },

  {
    name: "Paybox",
    logos: {
      desktop: payboxLogoBig,
      mobile: payboxLogoSmall,
    },
    hasButtomBorder: false,
    hasRightBorder: true,
  },

  {
    name: "Vizual plus",
    logos: {
      desktop: visualPlusLogoBig,
      mobile: visualPlusLogoSmall,
    },
    hasButtomBorder: false,
    hasRightBorder: false,
  },
];

export default function Partners() {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div className="w-full p-[2rem]">
      <div className="text-center flex flex-col gap-4 mb-8">
        <Text type="h1" text="Partners and Sponsors" isWhite />
        <Text
          type="p"
          text="Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors"
          isWhite
        />
      </div>

      <div className="flex items-center flex-col gap-[8px]  bg-white/10 border border-primary rounded-[6px]  p-[2.5rem] md:p-[3.5rem] lg:p-[5rem]">
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

//achive
