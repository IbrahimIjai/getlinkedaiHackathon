import React from "react";
import { Button } from "@/components/shadcn/Button";
import { Herosunderline, HerosHook } from "@/assets/icons";
import Text from "@/components/Text";
import Image from "next/image";

import Hackathon_Guy from "./images/Hackathon_Guy_.png";
import IgnitingText from "./components/IgnitingText";
import HerosLogoText from "./components/HerosLogoText";

export default function HeroPage() {
  return (
    <section className="flex flex-col pt-20 pb-0 px-5 items-center w-full lg:p-[8rem] relative gap-6 md:flex-row">
      <aside className="lg:hidden">
        <IgnitingText />
      </aside>
      <aside className="flex flex-col  gap-4 items-center md:items-start">
        <HerosLogoText />
        <Text
          text="Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize"
          isWhite
          className="max-w-md text-center md:text-left font-normal"
        />
        <Button variant="gradient" className="my-2">
          Register
        </Button>
        <Timer/>
      </aside>
      <Image src={Hackathon_Guy} className="w-full" alt="Man on smart glass" />
    </section>
  );
}

const Timer = () => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-1 items-baseline">
        <Text text="00" isWhite className="font-normal" type="h1" />
        <Text text="H" isWhite />
      </div>
      <div className="flex gap-1 items-baseline">
        <Text text="00" isWhite className="font-normal" type="h1" />
        <Text text="M" isWhite />
      </div>
      <div className="flex gap-1 items-baseline">
        <Text text="00" isWhite className="font-normal" type="h1" />
        <Text text="S" isWhite />
      </div>
    </div>
  );
};
