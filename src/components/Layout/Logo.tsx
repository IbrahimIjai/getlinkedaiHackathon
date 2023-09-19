import { Logo as LogoDesktop, LogoMobile } from '@/assets'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <LogoDesktop className='hidden lg:inline-flex w-[171px] h-[44px] '/>
      <LogoMobile className='lg:hidden w-[72px] h-[18px] md:w-[86px] md:h-[22px]'/>
    </div>
  )
}
