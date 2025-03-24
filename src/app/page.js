'use client'

import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import aosInit from '@@/utils/aosInit';
import ContactSection from '@@/components/sections/ContsctSection';
import HowWeWork from '@@/components/sections/howWeWork';

const HomePage = () => {
  useEffect(()=>{
    aosInit()
  },[])
 
  return (
    <>
      <IntroSection />
      <AboutSection />
      <HowWeWork />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
