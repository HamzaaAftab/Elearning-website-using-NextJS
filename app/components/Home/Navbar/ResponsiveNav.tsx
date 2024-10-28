'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  return (
    <>
      {/* Main Nav */}
      <Nav openNav={showNavHandler} />
      
      {/* Mobile Nav */}
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
    </>
  );
}

export default ResponsiveNav;
