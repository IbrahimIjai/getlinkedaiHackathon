

import React from 'react'
import Image from 'next/image'
import hackerBig from "../../../../public/Images/Homepage/hackerBig.png"
import hackerSmall from "../../../../public/Images/Homepage/hacker_small.png"

export default function Imagecluster() {
  return (
    <div className='relative'>
      <div>
        <Image src={hackerBig} alt="boy_desktop" width={400} height={300} loading='eager' />
      </div>
    </div>
  )
}
