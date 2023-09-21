"use client";

import Text from "@/components/Text";
import React from "react";
import { TimeLineSeperator, TimeLineSeperatorMobile } from "@/assets/icons";
import { useFormatDate } from "@/hooks/useFormatedTime";
import useMediaQuery from "@/hooks/useMediaQuery";

interface props {
  timelineIndex: number;
  title?: string;
  description?: string;
  unixTimestamp: number;
}

export default function TimeLineItem({ timelineIndex, unixTimestamp }: props) {
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const time = useFormatDate(unixTimestamp);
  return (
    <>
      {isDesktop ? (
        <div
          className={`w-full my-6 lg:my-0 flex items-end ${
            timelineIndex % 2 == 0 ? "flex-row-reverse text-left" : "text-right"
          }`}
        >
          <div className="w-[42%] hidden lg:inline -mb-8">
            <Text type="h3" text="Hackathon Announcement" />
            <Text
              type="p"
              isWhite
              text="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
            />
          </div>

          <div className="w-[16%] flex flex-col items-center justify-center gap-3">
            <TimeLineSeperator style={{ height: "100px" }} />
            <span className="h-12 w-12 rounded-full gradient flex justify-center items-center">
              <Text text={timelineIndex.toString()} isWhite />
            </span>
          </div>

          <Text
            type="h3"
            className={`w-[42%] ${
              timelineIndex % 2 == 0 ? " text-right" : "text-left"
            }`}
            text={time}
          />
        </div>
      ) : (
        <div className="flex gap-2 h-full my-2">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* <TimeLineSeperatorMobile /> */}
            <TimeLineSeperator style={{ height: "80px" }} />
            <span className="h-5 w-5 text-[5px] rounded-full gradient flex justify-center items-center">
              <Text text={timelineIndex.toString()} isWhite />
              {/* {timelineIndex} */}
            </span>
          </div>
          <div className="flex flex-col justify-between py-4">
            <Text type="h3" text="Hackathon Announcement" />
            <Text
              type="p"
              isWhite
              text="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
            />
            <Text type="h3" className="whitespace-nowrap " text={time} />
          </div>
        </div>
      )}
    </>
  );
}
