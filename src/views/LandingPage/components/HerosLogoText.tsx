

import Text from '@/components/Text'
import Image from 'next/image'
import React from 'react'


import Creative from "../images/Creative.png";
import Chain from "../images/Chain.png";
import Fire from "../images/Fire.png";

export default function HerosLogoText() {
  return (
    <div className="flex flex-col items-center lg:items-start lg:gap-6 mt-10 lg: lg:mt-0 clashDisplayText">
          <div className="flex gap-1">
            {/* <p className='text-3xl lg:text-[45px]'>getlinked</p> */}
            <Text text="getlinked" className='lg:text-[45px]'  isWhite type="h1" />
            <div className="relative">
              <Text text="Tech" className='lg:text-[45px]' isWhite type="h1" />
              <Image
                src={Creative}
                alt="Creative"
                className="absolute -top-[20px] right-3 lg:scale-150"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 lg:gap-3">
            <Text text="Hackathon" isWhite type="h1" className='lg:text-[45px]'/>
            <Text text="1.0"  type="h1" className='lg:text-[45px]' />
            <Image src={Chain} alt="Chain icon"  className='lg:scale-150'/>
            <Image src={Fire} alt="Fire icon" className='lg:scale-150' />
          </div>
        </div>
  )
}
