

import Text from '@/components/Text'
import Image from 'next/image'
import React from 'react'


import Creative from "../images/Creative.png";
import Chain from "../images/Chain.png";
import Fire from "../images/Fire.png";

export default function HerosLogoText() {
  return (
    <div className="flex flex-col items-center mt-10 lg:mt-0 clashDisplayText">
          <div className="flex gap-1">
            <Text text="getlinked "  isWhite type="h1" />
            <div className="relative">
              <Text text="Tech " isWhite type="h1" />
              <Image
                src={Creative}
                alt="Creative"
                className="absolute -top-[20px] right-3"
              />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Text text="Hackathon" isWhite type="h1" />
            <Text text="1.0"  type="h1" />
            <Image src={Chain} alt="Chain icon" />
            <Image src={Fire} alt="Fire icon" />
          </div>
        </div>
  )
}
