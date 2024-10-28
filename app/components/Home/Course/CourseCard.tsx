'use client'
import Image from 'next/image';
import React from 'react'
import { FaFile, FaStar } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';

type Props={
    course:{
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    category: string;
    }
}
const CourseCard = ({course}:Props) => {
  return (
   <Tilt>

        <div  className='bg-white rounded-lg overflow-hidden cursor-pointer'>
            <div>
                <Image src={course.image} alt={course.title} width={400} height={400} className='w-full h-full' />
            </div>
        {/* Price */}
            <div className='p-4'>
                    <h1 className='ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center flex-col -mt-[4rem] rounded-full bg-rose-700 text-white '>${course.price}</h1>
                    <div className='flex items-center mt-4 space-x-4'>
                <span className='text-xl text-black text-opacity-70 font-bold'>{course.category}</span>
                <span className='text-base text-gray-600 text-opacity-55'>{course.author}</span>
            </div>
            <h1 className='text-xl text-black font-bold mt-2'>{course.title}</h1>
            {/* reviews */}
            <div className='flex mt-2 items-center space-x-4'>
                    <div className='flex items-center '>
                        <FaStar className='w-4 h-4 text-yellow-500'/>
                        <FaStar className='w-4 h-4 text-yellow-500'/>
                        <FaStar className='w-4 h-4 text-yellow-500'/>
                        <FaStar className='w-4 h-4 text-yellow-500'/>
                        <FaStar className='w-4 h-4 text-yellow-500'/>
                    </div>
                    <span className='text-base text-orange-700 font-bold' >{course.reviewNumber} Reviews </span>
            </div>
            {/* line */}
            <div className='mt-6 mb-6 w-full h-[2px] bg-gray-500 opacity-15'>

            </div>
            {/* Lessons */}
            <div className='flex items-center justify-between'>
            <div className='flex mb-4 items-center justify-between'>
                <div className='flex items-center space-x-2'>
                    <FaFile className='w-4 h-4 text-orange-600'/>
                    <p className='text-base font-semibold text-gray-800'>{course.lessons} Lessons</p>
                </div>
            </div>

            <div className='flex mb-4 items-center justify-between'>
                <div className='flex items-center space-x-2'>
                    <FaUserGroup className='w-4 h-4 text-orange-600'/>
                    <p className='text-base font-semibold text-gray-800'>{course.students} Students</p>
                </div>
            </div>
            </div>
            
            </div>
            {/* Info */}
            
        </div>

   </Tilt>
  )
}

export default CourseCard
