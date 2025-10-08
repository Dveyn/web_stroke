import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import ContactSection from '@@/components/sections/ContsctSection';
import HowWeWork from '@@/components/sections/howWeWork';
import Script from 'next/script';

export const metadata = {
  title: 'Разработка сайтов в Ростове-на-Дону | Веб-студия ВебШтрих',
  description: 'Разработка сайтов под ключ в Ростове-на-Дону от 120 000 ₽. Создаём корпоративные сайты, интернет-магазины, веб-приложения, SEO и рекламу. Запуск за 7–10 дней.',
  keywords: [
    'разработка сайтов Ростов-на-Дону',
    'веб студия Ростов',
    'создание интернет-магазина Ростов',
    'SEO продвижение Ростов-на-Дону',
    'разработка веб-приложений Ростов',
    'реклама сайтов Ростов',
  ].join(', '),
  alternates: {
    canonical: 'https://webstroke.ru/',
  },
  openGraph: {
    title: 'Разработка сайтов в Ростове-на-Дону | Веб-студия ВебШтрих',
    description: 'Закажите разработку сайтов под ключ, интернет-магазинов и веб-приложений в Ростове-на-Дону. SEO, реклама и поддержка от команды ВебШтрих.',
    url: 'https://webstroke.ru/',
    siteName: 'ВебШтрих',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'ВебШтрих — разработка сайтов в Ростове-на-Дону',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Разработка сайтов в Ростове-на-Дону | ВебШтрих',
    description: 'Создаём адаптивные сайты и веб-приложения под ключ, SEO и рекламу для бизнеса Ростова-на-Дону.',
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
    yandexBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'cfdccd405acae9f8',
  },
  other: {
    'geo.position': '47.2357;39.7015',
    'geo.region': 'RU-ROS',
    'geo.placename': 'Ростов-на-Дону',
  },
};

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
