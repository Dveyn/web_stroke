'use client'

import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import aosInit from '@@/utils/aosInit';
import ContactSection from '@@/components/sections/ContsctSection';

const HomePage = () => {
  useEffect(()=>{
    aosInit()
  },[])
 
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

