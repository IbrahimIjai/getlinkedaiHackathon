import React from "react";
import TimeLineItem from "./components/TimeLineItem";
import Text from "@/components/Text";
export default function TimeLine() {
  return (
    <section className="px-[2.5rem] lg:px-[4rem] py-[4rem] lg:py-[8rem]">
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
      </div>
    </section>
  );
}
