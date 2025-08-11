import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import ContactSection from '@@/components/sections/ContsctSection';
import HowWeWork from '@@/components/sections/howWeWork';
import Script from 'next/script';

export const metadata = {
  title: 'ВебШтрих — разработка сайтов и веб-приложений | Веб-студия в Ростове-на-Дону',
  description: 'Создаем современные сайты и веб-приложения для бизнеса. Разработка на Next.js, React, TypeScript. Полный цикл: от дизайна до запуска и поддержки. Более 100 успешных проектов.',
  keywords: 'веб-студия, разработка сайтов, веб-приложения, Next.js, React, TypeScript, Ростов-на-Дону, digital-агентство, IT-услуги, сайт для бизнеса, ВебШтрих',
  openGraph: {
    title: 'ВебШтрих — разработка сайтов и веб-приложений',
    description: 'Создаем современные сайты и веб-приложения для бизнеса. Разработка на Next.js, React, TypeScript. Более 100 успешных проектов.',
    url: 'https://webstroke.ru',
    siteName: 'ВебШтрих',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'ВебШтрих — разработка сайтов и веб-приложений',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ВебШтрих — разработка сайтов и веб-приложений',
    description: 'Создаем современные сайты и веб-приложения для бизнеса. Разработка на Next.js, React, TypeScript.',
    images: ['/img/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
}

const HomePage = () => {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ВебШтрих",
            "url": "https://webstroke.ru",
            "logo": "https://webstroke.ru/img/logo.png",
            "description": "Веб-студия по разработке сайтов и веб-приложений",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "ул. Вавилова, д. 49, офис 111",
              "addressLocality": "Ростов-на-Дону",
              "addressRegion": "Ростовская область",
              "postalCode": "344000",
              "addressCountry": "RU"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7-800-600-98-33",
              "contactType": "customer service",
              "email": "info@webstroke.ru"
            },
            "sameAs": [
              "https://vk.com/webstroke",
              "https://t.me/webstroke"
            ]
          })
        }}
      />
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
