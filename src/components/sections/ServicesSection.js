"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBuilding, 
  FaShoppingCart, 
  FaLaptopCode, 
  FaSearch, 
  FaBullhorn, 
  FaCheckCircle, 
  FaLightbulb, 
  FaChartBar,
  FaClock,
  FaUserTie,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";
import aosInit from '@@/utils/aosInit';
import { BtnCta } from '../common/btnCta';

const services = [
  {
    icon: <FaBuilding />,
    title: "Корпоративный сайт",
    link: "/services/corporate-sites",
    description: "Построим современный сайт, который продаёт ваши услуги 24/7. Подберём решение под ваш бюджет и задачи.",
    benefits: ["👍 Привлекает клиентов", "📞 Удобная форма заявки", "💼 Повышает доверие к компании"],
    price: "от 120 000 ₽"
  },
  {
    icon: <FaShoppingCart />,
    title: "Интернет-магазин",
    link: "/services/ecommerce",
    description: "Запустим магазин, который начнёт продавать уже в первый день. С оплатой и доставкой прямо на сайте.",
    benefits: ["🛒 Готов к продажам", "💳 Приём платежей онлайн", "🚚 Удобно для покупателей"],
    price: "от 180 000 ₽"
  },
  {
    icon: <FaLaptopCode />,
    title: "Веб-сервис под ключ",
    link: "/services/web-apps",
    description: "Создадим уникальный сервис для автоматизации работы и роста вашего бизнеса.",
    benefits: ["🤝 Всё под ключ", "📱 Удобно для клиентов и сотрудников", "💡 Решает бизнес-задачи"],
    price: "от 200 000 ₽"
  },
  {
    icon: <FaSearch />,
    title: "SEO-продвижение",
    link: "/services/seo",
    description: "Поднимем ваш сайт в поиске и приведём больше целевых клиентов.",
    benefits: ["🔍 Рост трафика", "📈 Увеличение заявок", "💬 Повышение узнаваемости"],
    price: "от 60 000 ₽"
  },
  {
    icon: <FaBullhorn />,
    title: "Реклама и маркетинг",
    link: "/services/marketing",
    description: "Запустим рекламу, которая приведёт клиентов уже завтра. Работаем с Яндекс, Telegramm, VK.",
    benefits: ["🎯 Целевая аудитория", "📢 Рост узнаваемости", "💸 Увеличение продаж"],
    price: "от 70 000 ₽"
  }
];

const whyList = [
  { icon: <FaCheckCircle className="why-icon" />, text: 'Чётко объясняем процесс, без сложных терминов' },
  { icon: <FaLightbulb className="why-icon" />, text: 'Разрабатываем сайты, которые приводят клиентов и прибыль' },
  { icon: <FaChartBar className="why-icon" />, text: 'Сопровождаем и улучшаем проект даже после запуска' },
  { icon: <FaClock className="why-icon" />, text: 'Соблюдаем сроки, понимаем ценность времени бизнеса' },
  { icon: <FaUserTie className="why-icon" />, text: 'Индивидуальный подход под задачи и бюджет клиента' },
  { icon: <FaShieldAlt className="why-icon" />, text: 'Работаем по договору и даём гарантию качества' },
  { icon: <FaLaptopCode className="why-icon" />, text: 'Используем современные технологии и защищённый код' },
  { icon: <FaChartLine className="why-icon" />, text: 'Закладываем SEO и маркетинг уже на этапе разработки' },
];

const ServicesSection = () => {
  useEffect(() => {
    aosInit();
  }, []);
  const serviceColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-indigo-500 to-blue-500',
    'from-yellow-500 to-orange-500',
    'from-green-500 to-emerald-500',
  ];

  return (
    <section id="service">
      <div className="service-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="service-badge">Наши услуги</div>
          <h2 className="service-title" data-aos="fade-up">Полный цикл разработки</h2>
          <p className="service-subtitle">
            От идеи до запуска и поддержки — создаем цифровые продукты, которые работают на ваш бизнес
          </p>
        </motion.div>
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              tabIndex={0}
              onClick={() => window.location.href = service.link}
            >
              <div 
                className="service-icon"
                style={{
                  background: `linear-gradient(to bottom right, ${
                    serviceColors[index]?.includes('blue-500') ? '#3b82f6, #06b6d4' :
                    serviceColors[index]?.includes('purple-500') ? '#a855f7, #ec4899' :
                    serviceColors[index]?.includes('indigo-500') ? '#6366f1, #3b82f6' :
                    serviceColors[index]?.includes('yellow-500') ? '#eab308, #f97316' :
                    '#22c55e, #10b981'
                  })`
                }}
              >
                {service.icon}
              </div>
              <h3 className="service-card-title">
                <a href={service.link}>{service.title}</a>
              </h3>
              <p className="service-card-desc">{service.description}</p>
              <ul className="service-benefits">
                {service.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
              </ul>
              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #e5e7eb', width: '100%' }}>
                <p className="service-price">{service.price}</p>
                <a href={service.link} className="service-link">Подробнее об услуге →</a>
              </div>
            </motion.div>
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
