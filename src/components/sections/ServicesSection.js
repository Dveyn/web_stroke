"use client";

import React, { useEffect } from 'react';
import GlassCard from '../common/GlassCard';
import { FaBuilding, FaShoppingCart, FaLaptopCode, FaSearch, FaBullhorn } from "react-icons/fa";
import aosInit from '@@/utils/aosInit';
import { BtnCta } from '../common/btnCta';

const services = [
  {
    icon: <FaBuilding className="service-icon" />,
    title: "Корпоративные сайты",
    link: "/services/corporate-sites",
    description: "Создание представительских платформ для крупного бизнеса с уникальным дизайном и функционалом.",
    benefits: ["🔥 Уникальный дизайн", "⚡️ Быстрая загрузка", "🔗 Интеграция с сервисами"],
    price: "от 50 000 ₽"
  },
  {
    icon: <FaShoppingCart className="service-icon" />,
    title: "Интернет-магазины",
    link: "/services/ecommerce",
    description: "Высоконагруженные решения для e-commerce с интеграцией всех необходимых систем.",
    benefits: ["🛒 Готовые к продажам", "💳 Онлайн-оплата", "📈 Аналитика продаж"],
    price: "от 80 000 ₽"
  },
  {
    icon: <FaLaptopCode className="service-icon" />,
    title: "Веб-приложения",
    link: "/services/web-apps",
    description: "Разработка сложных веб-приложений с использованием современных технологий.",
    benefits: ["🚀 Высокая скорость", "🔒 Безопасность", "🔄 Интеграция API"],
    price: "от 100 000 ₽"
  },
  {
    icon: <FaSearch className="service-icon" />,
    title: "SEO анализ и продвижение",
    link: "/services/seo",
    description: "Оптимизация сайтов под поисковые системы, увеличение видимости и привлечение целевой аудитории.",
    benefits: ["📊 Анализ конкурентов", "🔍 SEO-оптимизация", "📢 Контент-маркетинг"],
    price: "от 30 000 ₽"
  },
  {
    icon: <FaBullhorn className="service-icon" />,
    title: "Маркетинг и реклама",
    link: "/services/marketing",
    description: "Разработка и запуск рекламных кампаний для увеличения трафика и конверсий.",
    benefits: ["🎯 Таргетированная реклама", "📢 Контент-стратегия", "📈 Аналитика и рост"],
    price: "от 40 000 ₽"
  }
];

const ServicesSection = () => {

  useEffect(() => {
    aosInit();
  }, []);
  return (
    <section className="section" id='service'>
      <h2 data-aos="fade-up">Наши услуги</h2>
      <div className="grid-3">
        { services.map((service, index) => (
          <GlassCard key={ index } className="glass-card clickable" data-aos="fade-up" data-aos-delay={ index * 100 } onClick={ () => window.location.href = service.link }>
            <h3>{ service.icon } <a href={ service.link }>{ service.title }</a></h3>
            <p>{ service.description }</p>
            <ul className="service-benefits">
              { service.benefits.map((benefit, i) => <li key={ i }>{ benefit }</li>) }
            </ul>
            <p className="service-price">{ service.price }</p>
            <a href={ service.link } className="cta-button">Подробнее об услуге</a>
          </GlassCard>
        )) }
      </div>

      <div className="cta-container">
        <h2>Почему выбирают нас?</h2>
        <ul className="cta-benefits-list">
          <li>Работаем официально, договор, гарантия</li>
          <li>Используем современные технологии</li>
          <li>Проекты под ключ с аналитикой</li>
        </ul>
        <BtnCta />
      </div>
    </section>
  );
};

export default ServicesSection;
