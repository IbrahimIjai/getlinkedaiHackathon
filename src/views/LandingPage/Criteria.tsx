"use client";

import Image from "next/image";
import Judge from "./images/Judge.png";
import Text from "@/components/Text";
import { criteriaData } from "./utils/criteriaData";
import { Button } from "@/components/shadcn/Button";
import roundedflare from "./images/roundedflare.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Glow from "../../components/Glow";

export default function Criteria() {
  const isDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <section className="grid lg:grid-cols-2 gap-5 md:flex-row items-center p-10 relative  border-b border-border/20">
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
        bottom={isDesktop? "-300px":"50px"}
        right="-360px"
      />
      <Image src={Judge} alt="Girl reading rules" className="m-auto" />
      <aside className="flex flex-col items-center md:items-start">
        <Text text="Judging Criteria " type="h3" isWhite />
        <Text text="Key attributes" type="h3" className="mb-5 mt-1" />
        <div className="flex flex-col gap-6">
          {criteriaData.map((criteria) => (
            <div
              key={criteria.title}
              className="max-w-md text-center md:text-left"
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
