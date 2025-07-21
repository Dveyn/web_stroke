"use client";

import React, { useEffect } from 'react';
import { FaBuilding, FaShoppingCart, FaLaptopCode, FaSearch, FaBullhorn, FaCheckCircle, FaLightbulb, FaChartBar } from "react-icons/fa";
import aosInit from '@@/utils/aosInit';
import { BtnCta } from '../common/btnCta';

const services = [
  {
    icon: <FaBuilding className="service-icon" />,
    title: "Сайт для вашей компании",
    link: "/services/corporate-sites",
    description: "Сделаем сайт, чтобы о вас узнали и начали обращаться новые клиенты. Цена зависит от задач — подберём оптимальный вариант под ваш бюджет.",
    benefits: ["👍 Привлекает клиентов", "📞 Удобно оставить заявку", "💼 Работает на ваш бизнес"],
    price: "от 120 000 ₽"
  },
  {
    icon: <FaShoppingCart className="service-icon" />,
    title: "Интернет-магазин",
    link: "/services/ecommerce",
    description: "Запустим магазин, чтобы вы могли продавать свои товары онлайн и зарабатывать больше. Цена зависит от задач — подберём оптимальный вариант под ваш бюджет.",
    benefits: ["🛒 Готов к продажам", "💳 Оплата прямо на сайте", "🚚 Удобно для покупателей"],
    price: "от 180 000 ₽"
  },
  {
    icon: <FaLaptopCode className="service-icon" />,
    title: "Сервис под ваши задачи",
    link: "/services/web-apps",
    description: "Придумаем и реализуем онлайн-сервис, который поможет вашему бизнесу работать проще и эффективнее. Цена зависит от задач — подберём оптимальный вариант под ваш бюджет.",
    benefits: ["🤝 Всё под ключ", "📱 Удобно для вас и клиентов", "💡 Решает ваши задачи"],
    price: "от 200 000 ₽"
  },
  {
    icon: <FaSearch className="service-icon" />,
    title: "Продвижение сайта",
    link: "/services/seo",
    description: "Сделаем так, чтобы ваш сайт находили в интернете и к вам обращались чаще. Цена зависит от задач — подберём оптимальный вариант под ваш бюджет.",
    benefits: ["🔍 Больше посетителей", "📈 Растёт число заявок", "💬 Вас легко найти"],
    price: "от 60 000 ₽"
  },
  {
    icon: <FaBullhorn className="service-icon" />,
    title: "Реклама и привлечение клиентов",
    link: "/services/marketing",
    description: "Настроим рекламу, чтобы о вас узнали и к вам пришли новые покупатели. Цена зависит от задач — подберём оптимальный вариант под ваш бюджет.",
    benefits: ["🎯 Больше клиентов", "📢 О вас узнают", "💸 Растёт прибыль"],
    price: "от 70 000 ₽"
  }
];

const whyList = [
  { icon: <FaCheckCircle className="why-icon" />, text: 'Всё объясняем простыми словами, без сложных терминов' },
  { icon: <FaLightbulb className="why-icon" />, text: 'Делаем так, чтобы сайт приносил вам прибыль' },
  { icon: <FaChartBar className="why-icon" />, text: 'Помогаем даже после запуска — всегда на связи' },
];

const ServicesSection = () => {
  useEffect(() => {
    aosInit();
  }, []);
  return (
    <section id="service">
      <div className="service-container">
        <h2 className="service-title" data-aos="fade-up">Наши услуги для вашего заработка</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              tabIndex={0}
              onClick={() => window.location.href = service.link}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">
                <a href={service.link}>{service.title}</a>
              </h3>
              <p className="service-card-desc">{service.description}</p>
              <ul className="service-benefits">
                {service.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
              </ul>
              <p className="service-price">{service.price}</p>
              <a href={service.link} className="cta-button">Подробнее об услуге</a>
            </div>
          ))}
        </div>

        <div className="cta-container why-choose-us">
          <h2 className="why-title">Почему нам доверяют?</h2>
          <div className="why-grid">
            {whyList.map((item, i) => (
              <div className="why-chip" key={i}>
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
          <BtnCta />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
