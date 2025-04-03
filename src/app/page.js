import Header from '../components/layout/Header';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import IntroSection from '@@/components/sections/IntroSection';
import ContactSection from '@@/components/sections/ContsctSection';
import HowWeWork from '@@/components/sections/howWeWork';

export const metadata = {
  title: 'ВебШтрих — комплексная разработка сайтов, продвижение и сопровождение',
  description: 'Полный цикл услуг: от идеи и дизайна до запуска и поддержки сайта. Мы помогаем малому и среднему бизнесу расти в интернете. Индивидуальный подход к каждому клиенту.',
  keywords: 'веб-студия, разработка сайтов, сопровождение, маркетинг, продвижение сайтов, digital-агентство, IT-услуги, сайт для бизнеса, ВебШтрих'
}

const HomePage = () => {


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
