import React from "react";
import { Button } from "@/components/shadcn/Button";
import { Herosunderline, HerosHook } from "@/assets/icons";
import Text from "@/components/Text";
import Image from "next/image";
import Creative from "./images/Creative.png";
import Chain from "./images/Chain.png";
import Fire from "./images/Fire.png";
import Hackathon_Guy from "./images/Hackathon_Guy_.png";
import Shiny_Ball from "./images/Shiny_Ball.png";

export default function HeroPage() {
  return (
    <section className="flex flex-col !pt-20 !pb-0 p-5 items-center w-full lg:p-[8rem] relative gap-6 md:flex-row">
      <aside className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1 w-max md:right-12 md:translate-x-0 md:left-auto">
        <Text text="Igniting a Revolution in " isWhite />
        <div className="relative w-fit">
          <Text text="HR Innovation" isWhite />
          <span
            className="absolute"
            style={{ width: "-webkit-fill-available" }}
          >
            <Herosunderline style={{ width: "inherit" }} />
          </span>
        </div>
      </aside>
      <aside className="flex flex-col gap-4 items-center md:items-start">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <Text text="getlinked " isWhite type="h1" />
            <div className="relative">
              <Text text="Tech " isWhite type="h1" />
              <Image
                src={Creative}
                alt="Creative"
                className="absolute -top-5 right-1"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <Text text="Hackathon" isWhite type="h1" />
            <Text text="1.0" type="h1" />
            <Image src={Chain} alt="Chain icon" />
            <Image src={Fire} alt="Fire icon" />
          </div>
        </div>
        <Text
          text="Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize"
          isWhite
          className="max-w-md text-center md:text-left"
        />
        <Button className="my-2">Register</Button>
        <div className="flex gap-4">
          <div className="flex gap-1 items-baseline">
            <Text text="00" isWhite type="h1" />
            <Text text="H" isWhite />
          </div>
          <div className="flex gap-1 items-baseline">
            <Text text="00" isWhite type="h1" />
            <Text text="M" isWhite />
          </div>
          <div className="flex gap-1 items-baseline">
            <Text text="00" isWhite type="h1" />
            <Text text="S" isWhite />
          </div>
        </div>
      </aside>
      <Image src={Hackathon_Guy} alt="Man on smart glass" />
    </section>
  );
}
