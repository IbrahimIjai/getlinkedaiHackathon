"use client"

import { Herosunderline,HerosunderlineSmall } from "@/assets/icons";
import useMediaQuery from "@/hooks/useMediaQuery";
import React from "react";

export default function IgnitingText() {
    const isDesktop = useMediaQuery("(min-width:1024px)");
  return (
    <div className="relative w-fit">
        
      <p className="text-[16px] md:text-[24px] lg:text-[36px] font-bold italic">Igniting a Revolution in HR Innovation</p>
     <div className="flex w-full justify-end"> 
        {
            isDesktop ? <Herosunderline/> : <HerosunderlineSmall/>
        }
     </div>
    </div>
  );
}
