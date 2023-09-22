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

const ImagePairData: imagepairProps[] = [
  {
    company1: {
      name: "Liberty Company",
      logos: {
        desktop: libertyCompanyLogoBig,
        mobile: libertyCompanyLogoSmall,
      },
    },
    company2: {
      name: "Whisperms company",
      logos: {
        desktop: wispermLogoBig,
        mobile: wispermLogoSmall,
      },
    },
    hasRightBorder: true,
  },
  {
    company1: {
      name: "Liberty Pay",
      logos: {
        desktop: libertyPayLogBig,
        mobile: libertyPayLogSmall,
      },
    },
    company2: {
      name: "Whisperms company",
      logos: {
        desktop: payboxLogoBig,
        mobile: payboxLogoSmall,
      },
    },
    hasRightBorder: true,
  },
  {
    company1: {
      name: "Winwise",
      logos: {
        desktop: winwiseLogoBig,
        mobile: winwiseLogoSmall,
      },
    },
    company2: {
      name: "Vuzual Plus",
      logos: {
        desktop: visualPlusLogoBig,
        mobile: visualPlusLogoSmall,
      },
    },
    hasRightBorder: false,
  },
];
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
    <div className="w-full p-[3rem]">
      <div className="text-center flex flex-col gap-4 mb-8">
        <Text type="h1" text="Partners and Sponsors" isWhite />
        <Text
          type="p"
          text="Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors"
          isWhite
        />
      </div>

     <div className="flex items-center flex-col gap-[8px] ">
     <div className="flex items-center gap-[6px] ">
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
      <div className="flex items-center gap-[6px]">
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
     
      {/* <div className="flex items-center justify-center w-full bg-white/10 border border-primary rounded-[6px] p-[1.5rem]">
        {ImagePairData.map(({ company1, company2, hasRightBorder }, i) => {
          return (
            <div key={i} className="flex items-center w-full">
              <ImageStrokePair
                isDesktop={isDesktop}
                company1={company1}
                company2={company2}
              />
              {hasRightBorder && <RightBorderPair isDesktop={isDesktop} />}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

//neww
interface imagepairPropsNew {
  company1: {
    name: string;
    logos: {
      desktop: any;
      mobile: any;
    };
    hasRightBorder?: boolean;
  };
  company2: {
    name: string;
    logos: {
      desktop: any;
      mobile: any;
    };
    hasRightBorder?: boolean;
  };
  company3: {
    name: string;
    logos: {
      desktop: any;
      mobile: any;
    };
    hasRightBorder?: boolean;
  };
  isDesktop?: boolean;
}
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
      <div className="flex items-center w-full gap-3">
        <div className="flex items-center justify-center w-[68px] h-[30px] p-3">
          <Image
            src={isDesktop ? logos.desktop : logos.mobile}
            alt={name + {} + "Logo"}
          />
        </div>
        {hasRightBorder && (
          <div>
            {isDesktop ? <VericalSeperator /> : <VericalSeperatorMobile />}
          </div>
        )}
      </div>
      {hasButtomBorder && (
        <div>
         { isDesktop ? (
          <HorizontalSeprators />
          ) : (
          <HorizontalSepratorsMobile />)}
        </div>
      )}
    </div>
  );
};

//achive
interface imagepairProps {
  company1: {
    name: string;
    logos: {
      desktop: any;
      mobile: any;
    };
  };
  company2: {
    name: string;
    logos: {
      desktop: any;
      mobile: any;
    };
  };
  isDesktop?: boolean;
  hasRightBorder?: boolean;
}
const ImageStrokePair = ({ company1, company2, isDesktop }: imagepairProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Image
        className="h-[48%]"
        src={isDesktop ? company1.logos.desktop : company1.logos.mobile}
        alt={company1.name + {} + "Logo"}
      />
      {isDesktop ? <HorizontalSeprators /> : <HorizontalSepratorsMobile />}
      <Image
        className="h-[48%]"
        src={isDesktop ? company2.logos.desktop : company2.logos.mobile}
        alt={company2.name + {} + "Logo"}
      />
    </div>
  );
};

const RightBorderPair = ({ isDesktop }: { isDesktop: boolean }) => {
  return (
    <>
      {isDesktop ? (
        <div className="flex flex-col items-center gap-10">
          <VericalSeperator />
          <VericalSeperator />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <VericalSeperatorMobile />
          <VericalSeperatorMobile />
        </div>
      )}
    </>
  );
};
