'use client'
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt';
const HeroImage = () => {
  return (
    <Tilt className='hidden lg:block pl-9'>
      <Image src="/images/hero.png" width={800} height={800} alt="Hero" />

    </Tilt>
      

    
  )
}

export default HeroImage
