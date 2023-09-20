import React from "react";
import Imagecluster from "./components/Imagecluster";
import { Button } from "@/components/shadcn/Button";
import { Herosunderline, HerosHook } from "@/assets/icons";
export default function Home() {
  return (
    <div className="flex border-b border-border items-center lg:flex-row flex-col w-full lg:p-[8rem]">
      <div>
        <div className="text-[5rem] font-bold whitespace-nowrap">
          <p>getlinked Tech</p>
          <p>
            Hackathon 1.0 <HerosHook />
          </p>
        </div>

        <p>
          Participate in getlinked tech Hackathon 2023 stand
          <br /> a chance to win a Big prize
        </p>
        <Button variant="gradient">Register</Button>
        <div className="text-[4rem]">
          <p>00:00:00</p>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[2.2rem]">
            Igniting a Revolution in HR Innovation
          </p>
          <div className="w-full flex justify-end">
            <Herosunderline />
          </div>
        </div>
        <Imagecluster />
      </div>
    </div>
  );
}
