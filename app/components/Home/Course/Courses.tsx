import { coursesData } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import CourseCard from './CourseCard'


const Courses = () => {
  return (
    <div className='pt-12 pb-16 relative bg-[#e9ecef]'>
      {/* Bounce Ball */}
      <Image src="/images/cb.png" width={1000} height={1000} alt="image" className='absolute top-[30%] animate-bounce duration-50 transition-all' />
      <div className='w-[85%] pt-8 pb-8 mx-auto'>
          <h1 className='text-4xl text-center md:text-5xl font-black bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-transparent bg-clip-text   ' >Popular Courses</h1>
          <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 '>
              {coursesData.map((course)=>{
                return(
                  <div key={course.id}>
                      <CourseCard course={course} />
                  </div>
                )
              })}
          </div>
      </div>
    </div>
  )
}

export default Courses
