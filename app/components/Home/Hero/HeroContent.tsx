import React from 'react'

const HeroContent = () => {
  return (
    <div>
      <h1 className='mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[3rem]
      lg:leading-[3.7rem] md:tracking-[9px] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]  from-white via-pink-200 to-white bg-clip-text text-transparent '>Best Online Platform for Education.</h1>

      <p className='text-sm mt-6 md:leading-[21px] md:tracking-wider md:text-base text-white text-opacity-70 '>Discover the best e-learning platform offering interactive courses, expert instructors, and personalized learning paths to boost your skills efficiently!</p>

      {/* Buttons */}
      <div  className='mt-6 flex items-center space-x-11'>
        <button className='md:px-11 md:py-3 px-6 py-2 text-white rounded-lg font-semibold text-md md:text-lg transition-all ease-in-out transform duration-300 bg-green-600 hover:bg-green-900 hover:scale-110 '>
            Get Started
        </button>

        <button className='md:px-11 md:py-3 px-6 py-2 text-white rounded-lg font-semibold text-md md:text-lg transition-all ease-in-out transform duration-300 bg-yellow-600 hover:bg-yellow-900 hover:scale-110 '>
            Learn More
        </button>
      </div>

      {/* Stats */}
      <div className='flex items-center flex-wrap space-x-16 mt-8  '>

        <div>
          <p className='text-base text-white font-bold md:text-xl lg:text-2xl'>260+</p>
          <p className='w-[100px] h-[4px] bg-green-600 mt-2 mb-2 rounded-lg '></p>
          <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
        </div>

        <div>
          <p className='text-base text-white font-bold md:text-xl lg:text-2xl'>2600+</p>
          <p className='w-[100px] h-[4px] bg-blue-600 mt-2 mb-2 rounded-lg '></p>
          <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
        </div>

        <div>
          <p className='text-base text-white font-bold md:text-xl lg:text-2xl'>60+</p>
          <p className='w-[100px] h-[4px] bg-pink-600 mt-2 mb-2 rounded-lg '></p>
          <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
        </div>

      </div>
    </div>
  )
}

export default HeroContent
