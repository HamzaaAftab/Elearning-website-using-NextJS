'use client'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed inset-0 ${showNav ? 'opacity-70' : 'opacity-0 pointer-events-none'} bg-black transition-opacity duration-300 z-[10000]`} />

      {/* Mobile Nav Panel */}
      <div className={`text-white fixed top-0 right-0 h-full ${navOpen} transition-transform duration-500 w-[80%] sm:w-[60%] bg-indigo-950 flex flex-col justify-center z-[10006]`}>
        {/* Nav Links */}
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className='nav_link text-[19px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>
              {link.label}
            </p>
          </Link>
        ))}

        {/* Close Button */}
        <CgClose onClick={closeNav} className='absolute top-[1rem] right-[1.4rem] sm:w-8 w-6 h-6 text-white cursor-pointer' />
      </div>
    </div>
  );
}

export default MobileNav;
