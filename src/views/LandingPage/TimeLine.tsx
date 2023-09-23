"use client"

import React from "react";
import TimeLineItem from "./components/TimeLineItem";
import Text from "@/components/Text";
import Stars from "@/components/NewStars";
import { stars } from "@/assets/images";
import useMediaQuery from "@/hooks/useMediaQuery";

//timeline test

export default function TimeLine() {
  return (
    <section className="px-[2.5rem] lg:px-[4rem] py-[4rem] lg:py-[8rem] relative">
      <Decoration/>
      <div className="flex w-full items-center flex-col gap-2 mb-4">
        <Text type="h1" text="Timeline" isWhite />
        <Text
          text="Here is the breakdown of the time we anticipate using for the upcoming event."
          isWhite
          className="text-center"
        />
      </div>
      <div className="flex flex-col gap-4 lg:gap-3">
        <TimeLineItem timelineIndex={1} unixTimestamp={1679308800} />
        <TimeLineItem timelineIndex={2} unixTimestamp={1679491200} />
        <TimeLineItem timelineIndex={3} unixTimestamp={1679673600} />
        <TimeLineItem timelineIndex={4} unixTimestamp={1679803600} />
        <TimeLineItem timelineIndex={5} unixTimestamp={1680673600} />
        <TimeLineItem timelineIndex={6} unixTimestamp={1680873600} />
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
        left={isDesktop ? "25%" : "15%"}
        top={isDesktop ? "27%" : "130px"}
      />
      <Stars
        src={isDesktop ? stars.whitestarbig : stars.whitestarsmall}
        right={isDesktop ? "20%" : "15%"}
        top={isDesktop ? "45%" : "50%"}
      />
    </>
  );
};

