import React from 'react'
import { FaArrowRight, FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-12 bg-[#eaf4f4]'>
       {/* defining grid */}
       <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
            {/* 1st Part */}
            <div>

            <div className='flex items-center space-x-5'>
                <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col' >
                  <FaAward className='h-6 w-6 text-white'/>
                </div>
                <h1 className='text-xl text-black font-bold'>Guaranteed and Certified</h1>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem]lg:leading-[3rem] xl:leading-[3.5rem] md:tracking-[3px] text-gray-800 ' >Online learning wherever and whenever</h1>
            <p className='mt-4 text-gray-600'>Empowering learners with flexible, on-demand courses tailored to your pace, helping you achieve your goals anytime, anywhere.</p>
            <button className='flex items-center space-x-3 px-8 py-3 mt-7 hover:bg-gray-700 transition-all duration-300 rounded-2xl bg-black text-white'>
              <span>Learn More</span>
              <FaArrowRight/>
            </button>
            </div>
            
            {/* 2nd Part */}
            <div>

              <div>
                <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>01</h1>
                <div className='-mt-10'>
                  <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>Flexible Schedule</h1>
                  <p className='w-[90%] lg:w-[85%] tracking-wide text-base text-black text-opacity-60'>Master new skills at your own pace with courses tailored to fit your busy schedule, anytime, anywhere</p>
                </div>
              </div>

              <div className='mt-8 w-full'>
                <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>02</h1>
                <div className='-mt-10'>
                  <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>Pocket Friendly</h1>
                  <p className='w-[90%] lg:w-[90%] tracking-wider text-base text-black text-opacity-60'>Affordable courses designed to fit your budget without compromising on quality education</p>
                </div>
              </div>

            </div>
       </div>
    </div>
  )
}

export default About
