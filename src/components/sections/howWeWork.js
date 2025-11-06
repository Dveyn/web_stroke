"use client";
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaLightbulb, 
  FaCode, 
  FaBug, 
  FaRocket,
  FaHeadset
} from "react-icons/fa";
import "../../styles/globals.css";
import aosInit from '@@/utils/aosInit';

const steps = [
  {
    icon: FaSearch,
    title: "Обсуждение",
    description: "Изучаем ваш бизнес, цели и задачи. Формируем техническое задание.",
    duration: "1-2 дня",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaLightbulb,
    title: "Дизайн и прототип",
    description: "Создаем UX/UI дизайн и интерактивный прототип для согласования.",
    duration: "5-7 дней",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaCode,
    title: "Разработка",
    description: "Пишем чистый код на современных технологиях с регулярными демо.",
    duration: "2-3 недели",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: FaBug,
    title: "Тестирование",
    description: "Проводим тщательное тестирование на всех устройствах и браузерах.",
    duration: "3-5 дней",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FaRocket,
    title: "Запуск",
    description: "Деплоим проект на production и настраиваем аналитику.",
    duration: "1-2 дня",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: FaHeadset,
    title: "Поддержка",
    description: "Предоставляем техническую поддержку и развиваем проект дальше.",
    duration: "постоянно",
    color: "from-teal-500 to-cyan-500"
  },
];

const HowWeWork = () => {
  useEffect(() => {
    aosInit();
  }, []);

  return (
    <section id="how-we-work" className="how-we-work-section">
      {/* Background decoration */}
      <div className="how-we-work-bg-decoration how-we-work-bg-1"></div>
      <div className="how-we-work-bg-decoration how-we-work-bg-2"></div>
      
      <div className="how-we-work-container-new">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="how-we-work-header"
        >
          <div className="how-we-work-badge">Как мы работаем</div>
          <h2 className="how-we-work-title">
            Прозрачный процесс разработки
          </h2>
          <p className="how-we-work-subtitle">
            Понятные этапы, регулярная коммуникация и предсказуемый результат
          </p>
        </motion.div>

        <div className="how-we-work-steps-wrapper">
          <div className="how-we-work-steps-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="how-we-work-step-wrapper"
                >
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="how-we-work-connector"></div>
                  )}
                  
                  <div className="how-we-work-step-card">
                    {/* Step number */}
                    <div className="how-we-work-step-number">
                      {index + 1}
                    </div>
                    
                    <div className={`how-we-work-step-icon ${step.color}`}>
                      <Icon style={{ fontSize: '32px', color: 'white' }} />
                    </div>
                    
                    <h3 className="how-we-work-step-title">{step.title}</h3>
                    
                    <p className="how-we-work-step-description">
                      {step.description}
                    </p>
                    
                    <div className="how-we-work-step-duration">
                      <svg className="how-we-work-duration-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="how-we-work-benefits"
          >
            <div className="how-we-work-benefit-card how-we-work-benefit-1">
              <div className="how-we-work-benefit-emoji">📋</div>
              <h4 className="how-we-work-benefit-title">Договор и гарантии</h4>
              <p className="how-we-work-benefit-text">Официальное оформление и юридическая защита</p>
            </div>
            
            <div className="how-we-work-benefit-card how-we-work-benefit-2">
              <div className="how-we-work-benefit-emoji">💬</div>
              <h4 className="how-we-work-benefit-title">Регулярные созвоны</h4>
              <p className="how-we-work-benefit-text">Обсуждаем прогресс и корректируем детали</p>
            </div>
            
            <div className="how-we-work-benefit-card how-we-work-benefit-3">
              <div className="how-we-work-benefit-emoji">🎯</div>
              <h4 className="how-we-work-benefit-title">Фокус на результат</h4>
              <p className="how-we-work-benefit-text">Не просто сайт, а инструмент для роста бизнеса</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
