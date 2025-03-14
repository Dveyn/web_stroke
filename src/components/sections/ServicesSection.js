import React from 'react';
import GlassCard from '../common/GlassCard';
import { FaBuilding, FaShoppingCart, FaLaptopCode, FaSearch, FaBullhorn } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="section" id='service'>
      <h2 data-aos="fade-up">Наши услуги</h2>
      <div className="grid-3">
        <GlassCard data-aos="fade-up">
          <h3><FaBuilding className="service-icon" /> <a href="/services/corporate-sites">Корпоративные сайты</a></h3>
          <p>Создание представительских платформ для крупного бизнеса с уникальным дизайном и функционалом.</p>
          <ul className="service-benefits">
            <li>🔥 Уникальный дизайн</li>
            <li>⚡️ Быстрая загрузка</li>
            <li>🔗 Интеграция с сервисами</li>
          </ul>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="100">
          <h3><FaShoppingCart className="service-icon" /> <a href="/services/ecommerce">Интернет-магазины</a></h3>
          <p>Высоконагруженные решения для e-commerce с интеграцией всех необходимых систем.</p>
          <ul className="service-benefits">
            <li>🛒 Готовые к продажам</li>
            <li>💳 Онлайн-оплата</li>
            <li>📈 Аналитика продаж</li>
          </ul>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="200">
          <h3><FaLaptopCode className="service-icon" /> <a href="/services/web-apps">Веб-приложения</a></h3>
          <p>Разработка сложных веб-приложений с использованием современных технологий.</p>
          <ul className="service-benefits">
            <li>🚀 Высокая скорость</li>
            <li>🔒 Безопасность</li>
            <li>🔄 Интеграция API</li>
          </ul>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="300">
          <h3><FaSearch className="service-icon" /> <a href="/services/seo">SEO анализ и продвижение</a></h3>
          <p>Оптимизация сайтов под поисковые системы, увеличение видимости и привлечение целевой аудитории.</p>
          <ul className="service-benefits">
            <li>📊 Анализ конкурентов</li>
            <li>🔍 SEO-оптимизация</li>
            <li>📢 Контент-маркетинг</li>
          </ul>
        </GlassCard>
        <GlassCard data-aos="fade-up" data-aos-delay="400">
          <h3><FaBullhorn className="service-icon" /> <a href="/services/marketing">Маркетинг и реклама</a></h3>
          <p>Разработка и запуск рекламных кампаний для увеличения трафика и конверсий.</p>
          <ul className="service-benefits">
            <li>🎯 Таргетированная реклама</li>
            <li>📢 Контент-стратегия</li>
            <li>📈 Аналитика и рост</li>
          </ul>
        </GlassCard>
      </div>

      <div className="cta-container">
        <a href="/#contact" className="cta-button">Оставить заявку</a>
      </div>
    </section>
  );
};

export default ServicesSection;
