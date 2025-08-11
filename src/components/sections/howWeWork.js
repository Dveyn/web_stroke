"use client";
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaSearch, FaDraftingCompass, FaPalette, FaCode, FaBug, FaRocket } from "react-icons/fa";
import "../../styles/globals.css";
import aosInit from '@@/utils/aosInit';

const steps = [
  {
    icon: <FaSearch />,
    title: "Знакомство и ваши цели",
    description: "Вы рассказываете о бизнесе и задачах. Мы выясняем, как сайт сможет приносить вам клиентов и прибыль."
  },
  {
    icon: <FaDraftingCompass />,
    title: "План и предложение",
    description: "Согласуем понятный план работ и фиксируем сроки, чтобы всё было прозрачно и без сюрпризов."
  },
  {
    icon: <FaPalette />,
    title: "Дизайн под ваш бренд",
    description: "Создаём макет, который отражает стиль и ценности вашего бизнеса. Всё утверждается с вами."
  },
  {
    icon: <FaCode />,
    title: "Разработка и интеграции",
    description: "Воплощаем дизайн в рабочий сайт, подключаем формы, оплату, CRM и всё, что нужно."
  },
  {
    icon: <FaBug />,
    title: "Тестирование и запуск",
    description: "Проверяем работу сайта на всех устройствах, исправляем нюансы и только потом запускаем."
  },
  {
    icon: <FaRocket />,
    title: "Поддержка и рост",
    description: "После запуска помогаем с продвижением и улучшениями, чтобы сайт приносил больше заявок."
  },
];

const HowWeWork = () => {
  useEffect(() => {
    aosInit();
  }, []);

  return (
    <section id="how-we-work" className="section">
      <motion.div
        initial={ { opacity: 0, y: 20 } }
        whileInView={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.8 } }
        viewport={ { once: true } }
      >
        <h2>Как мы работаем?</h2>
        <p className="section-subtitle">
          Прозрачный процесс от заявки до запуска
        </p>
      </motion.div>

      <div className="how-we-work-container">
        <div className="timeline"></div>
        <div className="how-we-work-grid">
          { steps.map((step, index) => (
            <StepCard key={ index } index={ index } step={ step } />
          )) }
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ index, step }) => {
  return (
    <motion.div
      className={ `how-we-work-card ${index % 2 === 0 ? "left" : "right"}` }
      initial={ { opacity: 0, x: index % 2 === 0 ? -50 : 50 } }
      whileInView={ { opacity: 1, x: 0 } }
      transition={ { duration: 0.6, delay: index * 0.2 } }
      viewport={ { once: true } }
      whileHover={ { scale: 1.02 } }
    >
      <div className="how-we-work-icon">{ step.icon }</div>
      <h3>{ step.title }</h3>
      <p>{ step.description }</p>
    </motion.div>
  );
};

export default HowWeWork;
