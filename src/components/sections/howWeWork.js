import React from 'react';
import { motion } from "framer-motion"; // Импортируем motion
import { FaSearch, FaDraftingCompass, FaPalette, FaCode, FaBug, FaRocket } from "react-icons/fa";
import "../../styles/globals.css";

const steps = [
  { icon: <FaSearch />, title: "Анализ и стратегия", description: "Определяем цели, аудиторию и ключевые требования проекта." },
  { icon: <FaDraftingCompass />, title: "Прототипирование", description: "Создаем схему будущего проекта, UX-дизайн и структуру." },
  { icon: <FaPalette />, title: "Дизайн", description: "Разрабатываем UI-дизайн, подбираем стиль и цвета." },
  { icon: <FaCode />, title: "Разработка", description: "Пишем код, интегрируем API и настраиваем сервер." },
  { icon: <FaBug />, title: "Тестирование", description: "Проверяем сайт на ошибки, адаптивность и производительность." },
  { icon: <FaRocket />, title: "Запуск и поддержка", description: "Публикуем проект, обучаем клиента и сопровождаем сайт." },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="section">
      <h2>Как мы работаем</h2>
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
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Начальная позиция и непрозрачность
      whileInView={{ opacity: 1, x: 0 }} // Анимация при попадании в область видимости
      transition={{ duration: 0.6, delay: index * 0.3 }} // Плавное появление, с задержкой в зависимости от индекса
    >
      <div className="how-we-work-icon">{step.icon}</div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </motion.div>
  );
};

export default HowWeWork;
