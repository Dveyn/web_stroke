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
            <strong>ВебШтрих</strong> — профессиональная веб-студия в Ростове-на-Дону, которая помогает компаниям зарабатывать в интернете. Мы создаём сайты и веб-приложения для людей, а не для программистов: понятная структура, цепляющий дизайн и продуманная логика позволяют посетителям быстро находить нужную информацию и оставлять заявки.
          </p>
          <p>
            Вам не нужно разбираться в технологиях: расскажите о бизнесе и целях, а мы подготовим концепцию, прототип, адаптивный дизайн, разработку и интеграции с платежными системами и CRM. Все этапы фиксируем в договоре, соблюдаем сроки и держим вас в курсе через прозрачную систему отчетности.
          </p>
          <p>
            Команда ВебШтрих — это дизайнеры, разработчики и маркетологи с опытом более 50 завершенных проектов в Ростове-на-Дону и по России. Каждый специалист отвечает за свой блок: мы тестируем функционал, оптимизируем скорость загрузки, настраиваем аналитику и SEO, чтобы сайт стабильно приводил клиентов.
          </p>
          <p>
            Примеры успехов: корпоративный сайт для локального производителя увеличил органический трафик на 40% за три месяца за счёт внедрения SEO и удобной формы заявок. Интернет-магазин сантехники получил первые продажи в течение семи дней после запуска благодаря продуманной структуре каталога и интеграции с 1C. Для IT-сервиса мы разработали веб-приложение с личным кабинетом и аналитикой, что помогло увеличить LTV клиентов на 25%.
          </p>
          <p>
            Мы говорим простым языком, всегда на связи по телефону, электронной почте и мессенджерам. Если нужна помощь с продвижением, рекламой или обновлением контента, команда подключается оперативно и предлагает понятные рекомендации.
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
          <p style={{ marginTop: '1.5rem', color: '#d0d4ff' }}>
            С нами разработка сайтов в Ростове-на-Дону становится простым и эффективным процессом, приносящим реальные результаты.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
