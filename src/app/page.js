'use client';

import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import aosInit from '@@/utils/aosInit';
import ContactSection from '@@/components/sections/ContsctSection';
import HowWeWork from '@@/components/sections/howWeWork';
import Head from 'next/head';

const HomePage = () => {
  useEffect(() => {
    aosInit();
  }, []);

  return (
    <>
      <Head>
        <title>ВебШтрих — комплексная разработка сайтов, продвижение и сопровождение</title>
        <meta name="description" content="Полный цикл услуг: от идеи и дизайна до запуска и поддержки сайта. Мы помогаем малому и среднему бизнесу расти в интернете. Индивидуальный подход к каждому клиенту." />
        <meta name="keywords" content="веб-студия, разработка сайтов, сопровождение, маркетинг, продвижение сайтов, digital-агентство, IT-услуги, сайт для бизнеса, ВебШтрих" />
      </Head>
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
