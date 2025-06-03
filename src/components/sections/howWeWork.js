"use client"
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaSearch, FaDraftingCompass, FaPalette, FaCode, FaBug, FaRocket } from "react-icons/fa";
import "../../styles/globals.css";
import aosInit from '@@/utils/aosInit';

const steps = [
  { icon: <FaSearch />, title: "Анализ и стратегия", description: "Определяем цели, аудиторию и ключевые требования проекта." },
  { icon: <FaDraftingCompass />, title: "Прототипирование", description: "Создаем схему будущего проекта, UX-дизайн и структуру." },
  { icon: <FaPalette />, title: "Дизайн", description: "Разрабатываем UI-дизайн, подбираем стиль и цвета." },
  { icon: <FaCode />, title: "Разработка", description: "Пишем код, интегрируем API и настраиваем сервер." },
  { icon: <FaBug />, title: "Тестирование", description: "Проверяем сайт на ошибки, адаптивность и производительность." },
  { icon: <FaRocket />, title: "Запуск и поддержка", description: "Публикуем проект, обучаем клиента и сопровождаем сайт." },
];

const HowWeWork = () => {
  useEffect(() => {
    aosInit();
  }, []);

  return (
    <section id="how-we-work" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Как мы работаем</h2>
        <p className="section-subtitle">
          Четкий процесс разработки для достижения лучших результатов
        </p>
      </motion.div>
      
      <div className="how-we-work-container">
        <div className="timeline"></div>
        <div className="how-we-work-grid">
          {steps.map((step, index) => (
            <StepCard key={index} index={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ index, step }) => {
  return (
    <motion.div
      className={`how-we-work-card ${index % 2 === 0 ? "left" : "right"}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="how-we-work-icon">{step.icon}</div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </motion.div>
  );
};

export default HowWeWork;
