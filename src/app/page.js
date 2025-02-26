'use client'

import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import aosInit from '@@/utils/aosInit';

const HomePage = () => {
  useEffect(()=>{
    aosInit()
  },[])
 
  return (
    <>
      <Header />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
    </>
  );
};

export default HomePage;
