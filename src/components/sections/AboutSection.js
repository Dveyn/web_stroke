"use client";
import React, { useEffect } from 'react';
import { FiCheckCircle, FiCpu, FiSettings, FiShield, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import aosInit from '@@/utils/aosInit';
import { BtnCta } from '../common/btnCta';

const AboutSection = () => {
  useEffect(() => {
    aosInit();
  }, []);
  return (
    <section id="about">
      <div className="about-container">
        <div className="glass-card about-main-card" data-aos="fade-up">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-title"
            style={{
              color: '#fff',
              fontWeight: 800,
              fontSize: '2.5rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.18)',
              letterSpacing: '-0.01em',
              textAlign: 'center',
              marginBottom: 'var(--space-6)',
              paddingBottom: 'var(--space-4)',
              position: 'relative',
              background: 'none',
              borderRadius: 0
            }}
          >
            О нас
            <span
              style={{
                display: 'block',
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transform: 'translateX(-50%)',
                width: 60,
                height: 2.5,
                background: 'linear-gradient(90deg, var(--primary), var(--primary-light), var(--primary))',
                borderRadius: 'var(--radius-full)',
                opacity: 1,
                content: "''"
              }}
            />
          </motion.h2>
          <p>
            <strong>ВебШтрих</strong> — команда, которая помогает бизнесу зарабатывать через интернет. Мы делаем сайты для людей, а не для программистов.
          </p>
          <p>
            Вам не нужно разбираться в технологиях — просто расскажите, что хотите получить, и мы всё реализуем под ключ.
          </p>
          <p>
            Объясняем всё простыми словами, всегда на связи и отвечаем на любые вопросы.
          </p>

          <h3 className="h2_section">Почему нам доверяют</h3>

          <div className="about-grid">
            {[
              { icon: <FiCheckCircle />, title: "Всё понятно и просто", desc: "Объясняем без сложных слов и IT-терминов." },
              { icon: <FiCpu />, title: "Ваша выгода — наш приоритет", desc: "Делаем сайт, чтобы вы получали больше клиентов и заявок." },
              { icon: <FiSettings />, title: "Всё под ключ", desc: "Берём на себя всю работу: от идеи до запуска и поддержки." },
              { icon: <FiShield />, title: "Честность и поддержка", desc: "Всегда на связи, помогаем даже после запуска." },
              { icon: <FiTrendingUp />, title: "Результат, а не слова", desc: "Наши сайты реально приносят прибыль клиентам." }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="about-card"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="about-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="cta">
            <strong>С нами вы получите сайт, который начнёт работать на ваш бизнес с первого дня.</strong>
          </p>

          <div className="cta-container">
            <BtnCta />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
