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
            Веб-студия <strong>«ВебШтрих»</strong> – создаем технологичные и эффективные веб-решения для бизнеса.
          </p>
          <p>
            Разрабатываем <strong>сайты, веб-приложения</strong> и <strong>цифровые платформы</strong>, которые помогают привлекать клиентов, автоматизировать процессы и масштабировать бизнес.
          </p>
          <p>
            Работаем с <strong>Next.js, TypeScript, Node.js, Express</strong>. Гарантируем скорость, надежность и адаптацию под современные бизнес-задачи.
          </p>

          <h3 className="h2_section">Почему выбирают нас</h3>

          <div className="about-grid">
            {[
              { icon: <FiCheckCircle />, title: "Опыт и экспертиза", desc: "Более 3 лет создаем цифровые продукты." },
              { icon: <FiCpu />, title: "Комплексный подход", desc: "От идеи до поддержки и продвижения." },
              { icon: <FiSettings />, title: "Современные технологии", desc: "Высокая скорость, безопасность и стабильность." },
              { icon: <FiShield />, title: "Гарантия качества", desc: "Работаем официально, фиксируем условия договора." },
              { icon: <FiTrendingUp />, title: "Масштабируемые решения", desc: "Гибкие системы, легко адаптируемые под рынок." }
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
            <strong>Мы создаем сайты, которые не просто выглядят стильно, но и работают на результат.</strong>
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
