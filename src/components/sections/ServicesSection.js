import React from 'react';
import GlassCard from '../common/GlassCard';

const ServicesSection = () => {
  return (
    <section className="section" id='service'>
      <h2 data-aos="fade-up">Наши услуги</h2>
      <div className="grid-3">
        <GlassCard data-aos="fade-up">
          <h3>Корпоративные сайты</h3>
          <p>Создание представительских платформ для крупного бизнеса с уникальным дизайном и функционалом</p>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="100">
          <h3>Интернет-магазины</h3>
          <p>Высоконагруженные решения для e-commerce с интеграцией всех необходимых систем</p>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="200">
          <h3>Веб-приложения</h3>
          <p>Разработка сложных веб-приложений с использованием современных технологий</p>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="300">
          <h3>SEO анализ и продвижение</h3>
          <p>Оптимизация сайтов под поисковые системы, увеличение видимости и привлечение целевой аудитории</p>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="400">
          <h3>Маркетинг и реклама</h3>
          <p>Разработка и запуск рекламных кампаний для увеличения трафика и конверсий</p>
        </GlassCard>
      </div>
    </section>
  );
};

export default ServicesSection;
