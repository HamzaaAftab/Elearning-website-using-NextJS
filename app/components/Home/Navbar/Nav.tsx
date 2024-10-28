'use client'
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed pt-2 w-full ${navBg ? 'bg-indigo-700' : 'bg-none'} transition-all duration-300 h-[13vh] z-[1000]`}>
      <div className='flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <Image src="/images/logo.png" alt="Logo" width={120} height={120} />

        {/* Nav Links for Large Screens */}
        <div className='hidden lg:flex items-center space-x-10'>
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className='nav_link'>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Sign Up Button */}
        <div className='flex items-center space-x-4'>
          <button className='md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-green-700 hover:bg-green-900 hover:scale-110 transition-all duration-300 rounded-lg'>
            SIGNUP
          </button>

          {/* Hamburger Menu for Mobile Screens */}
          <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-white lg:hidden cursor-pointer' />
        </div>
      </div>
    </div>
  );
}

export default Nav;
