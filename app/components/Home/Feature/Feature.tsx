'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { FaBriefcase } from 'react-icons/fa';
const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-16 w-[85%] mx-auto'>
          {/* 1st Part / Image */}
          <Tilt>
          <Image src="/images/f.png" width={1000} height={1000} alt="image" />
          </Tilt>
          {/* 2nd Part / Text Content */}
          <div>
            {/* SubHeading */}
          <div className='flex items-center space-x-5'>
                <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col' >
                  <FaBriefcase className='h-6 w-6 text-white'/>
                </div>
                <h1 className='text-xl tracking-wider text-black font-bold'>Premium Learning Experience</h1>
            </div>
            {/* Main Heading */}
                <h1 className=' w-full text-2xl sm:text-3xl md:text-4xl lg:text-[52px] mt-7 font-bold md:leading-[3rem] lg:leading-[3rem] xl:leading-[3.4rem] md:tracking-[3px] text-gray-800 ' >Providing amazing online courses.</h1>
                <div className='mt-6 mb-3'>
                  <h1 className='text-lg md:text-2xl text-black font-bold text-opacity-75' >Master the skills that matters to you.</h1>
                  <p className='text-sm md:text-base text-black text-opacity-70 mt-2' >Empower your journey by mastering the skills that truly matter. With personalized, practical learning, gain expertise that fuels both your professional success and personal development. </p>
                </div>

                <div className='mt-6 mb-3'>
                  <h1 className='text-lg md:text-2xl text-black font-bold text-opacity-75' >Increase your learning Skills.</h1>
                  <p className='text-sm md:text-base text-black text-opacity-70 mt-2' >Unlock your potential with targeted, hands-on learning. Master essential skills that drive success in your career and personal growth.</p>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Feature
