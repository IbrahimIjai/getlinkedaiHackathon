"use client"

import Image from 'next/image'
import React from 'react'
import FaqBigImg from "./images/FaqTagLg.png"
import FaqSmImg from "./images/FaqTagSm.png"
import useMediaQuery from '@/hooks/useMediaQuery'
import { FaqAccordion } from '../components/FaqAccordion'
export default function Faq() {

    const isDesktop = useMediaQuery("(min-width:1024px)")
    console.log(isDesktop);
    
  return (
    <div className='grid col-span-2 w-full'>

        <FaqAccordion/>
      <div>
            {
                isDesktop ? <Image src={FaqBigImg} alt='placeHolder image for Faq' /> : 
                <Image src={FaqSmImg} alt='placeHolder image for Faq' />
            }
        
      </div>
    </div>
  )
}
