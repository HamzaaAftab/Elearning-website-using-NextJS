import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-12 bg-black'>
      {/* Grid System */}
      <div className='w-[85%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[2.6px] border-gray-400 border-opacity-35 '>
        {/* 1st Footer Part */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
          <p className='text-white text-opacity-70 tracking-widest font-bold'>Best Online Learning Platform where you can enhance your skills</p>
          {/* Social Links */}
          <div className='flex items-center space-x-5 mt-5 text-white'>
            <FaFacebookF className='w-6 h-6 text-blue-600 text-opacity-90'/>
            <FaTwitter className='w-6 h-6 text-sky-500 text-opacity-90'/>
            <FaYoutube className='w-6 h-6 text-red-700 text-opacity-90'/>
            <FaInstagram className='w-6 h-6 text-pink-600 text-opacity-90'/>

          </div>
        </div>

        {/* 2nd Part */}
        <div className=''>
          <h1 className='footer_heading' >Popular</h1>
          <p className='footer_link'>Web Development</p>
          <p className='footer_link'>Hacking</p>
          <p className='footer_link'>UI/UX Design </p>
          <p className='footer_link'>App Development</p>
          <p className='footer_link'>Desktop Development</p>
          <p className='footer_link'>Digital Marketing</p>
        </div>

        {/* 3nd Part */}
        <div className=''>
          <h1 className='footer_heading' >Quick Links</h1>
          <p className='footer_link'>Home</p>
          <p className='footer_link'>About</p>
          <p className='footer_link'>Courses </p>
          <p className='footer_link'>Instructor</p>
          <p className='footer_link'>Profile</p>
          <p className='footer_link'>Privacy Policy</p>
        </div>

        {/* 4th Part */}
        <div>
          <h1 className='footer_heading'>Subscribe our Newsletter</h1>
          <input type="text"  placeholder='Enter your email' className='px-6 py-2 rounded-xl outline-none bg-gray-700 w-full text-white mt-2'  />
          <button className='px-6 py-2 mt-3 rounded-xl outline-none bg-rose-600 w-full text-white'>
            Subscribe
          </button>
        </div>
      </div>
    <p className='text-center mt-4 text-base text-white text-opacity-70 '>@Copyright 2024 by Hamza Aftab</p>
      
    </div>
  )
}

export default Footer
