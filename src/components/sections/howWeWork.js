"use client"
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { FaSearch, FaDraftingCompass, FaPalette, FaCode, FaBug, FaRocket } from "react-icons/fa";
import "../../styles/globals.css";
import aosInit from '@@/utils/aosInit';

const steps = [
  { icon: <FaSearch />, title: "Знакомство и ваши цели", description: "Вы рассказываете, что хотите получить от сайта. Мы внимательно слушаем и предлагаем лучшие решения для вашего бизнеса." },
  { icon: <FaDraftingCompass />, title: "План и предложение", description: "Объясняем простыми словами, как будет работать ваш сайт, и согласовываем план действий." },
  { icon: <FaPalette />, title: "Дизайн под ваш вкус", description: "Показываем, как будет выглядеть сайт. Всё согласуем, чтобы вам нравилось." },
  { icon: <FaCode />, title: "Создание сайта", description: "Всё делаем сами — вам не нужно разбираться в деталях. Просто ждёте готовый результат." },
  { icon: <FaBug />, title: "Проверка и запуск", description: "Показываем сайт, проверяем вместе, чтобы всё работало как надо. Исправляем, если что-то не нравится." },
  { icon: <FaRocket />, title: "Ваша прибыль", description: "Сайт начинает работать на вас — привлекает клиентов и приносит заявки. Мы всегда на связи, если нужна помощь." },
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
        <h2>Как мы работаем для вашего заработка</h2>
        <p className="section-subtitle">
          Всё объясняем простыми словами и берём на себя — вы просто получаете результат
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
