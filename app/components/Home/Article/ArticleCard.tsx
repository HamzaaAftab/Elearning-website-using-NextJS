'use client'
import Image from 'next/image';
import React from 'react'
import { BiHeart } from 'react-icons/bi';
import Tilt from 'react-parallax-tilt';
type Props = {
    article: {
        id: number;
        userImage: string;
        username: string;
        reaction: number;
        coverImage: string;
        title: string;
    }
}
const ArticleCard = ({article}:Props) => {
  return (
    <Tilt>
        <div className='bg-white rounded-lg overflow-hidden'>
        {/* Cover Image */}
        <Image src={`${article.coverImage}`} alt={article.title} width={300} height={300} className='h-full w-full' />
        {/* Authors and Reactions */}
        <div className='p-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 '>
                    <Image src={article.userImage} alt={article.username} width={40} height={40} className='rounded-full'/>
                    <p className='text-base text-black text-opacity-45 font-bold' >{article.username}</p>
                    
                </div>
                <div className='flex items-center space-x-2'>
                        <BiHeart className='text-red-600 font-bold ' />
                        <p className='text-sm text-gray-700 text-opacity-75 font-bold ' >{article.reaction}</p>
                </div>
            </div>
            {/* Heading */}
            <h1 className='mt-4 mb-4 text-xl font-semibold'>{article.title}</h1>
            <p className='text-base text-gray-700' >Comprehensive, practical courses designed to build essential skills and accelerate your growth.</p>
            <button className='mt-4 mb-3 hover:text-green-600 text-lg text-black text-opacity-55 font-bold' >Learn More</button>

        </div>
    </div>
    </Tilt>

  )
}

export default ArticleCard
