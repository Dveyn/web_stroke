"use client";

import styles from '../../styles/IntroSection.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiFigma, SiJavascript } from "react-icons/si";
import { FaArrowRight, FaRocket, FaCheckCircle } from 'react-icons/fa';
import aosInit from '@@/utils/aosInit';
import { useEffect, useState } from 'react';

const IntroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const floatingIcons = [
    { icon: <SiReact />, alt: "React", tooltip: "Современный UI", color: "#61DAFB" },
    { icon: <SiNextdotjs />, alt: "Next.js", tooltip: "Быстрая загрузка", color: "#000000" },
    { icon: <SiTypescript />, alt: "TypeScript", tooltip: "Надежный код", color: "#3178C6" },
    { icon: <SiFigma />, alt: "Figma", tooltip: "Современный дизайн", color: "#F24E1E" },
    { icon: <SiJavascript />, alt: "JavaScript", tooltip: "Интерактивность", color: "#F7DF1E" },
  ];

  const benefits = [
    "Бесплатный аудит сайта",
    "Гарантия на работы",
    "Поддержка 24/7",
    "Современные технологии"
  ];

  useEffect(() => {
    aosInit();
  }, []);

  return (
    <section className={ styles.intro } id="home">
      <div className={ styles.backgroundElements }>
        <div className={ styles.gradientCircle }></div>
        <div className={ styles.gradientCircle2 }></div>
        <div className={ styles.dotsPattern }></div>
      </div>
      <div className={ styles.heroCard }>
        <h1 className={ styles.title }>
          Создаём сайты, которые приносят клиентов и прибыль
        </h1>
        <div className={ styles.subtitle }>
          Быстрые, безопасные и адаптивные сайты для малого бизнеса. Запуск от 7 дней.
        </div>
        <div className={ styles.socialProof }>
          <FaCheckCircle style={ { marginRight: '8px', color: 'var(--primary)' } } />
          Рост продаж — сайты, которые реально конвертят посетителей в клиентов.
        </div>
        <div className={ styles.benefits }>
          <div className={ styles.benefit }>
            <FaRocket style={ { marginRight: '8px', color: 'var(--primary)' } } />
            Скорость запуска — от идеи до готового проекта за 7–10 дней.
          </div>
          <div className={ styles.benefit }>
            <FaRocket style={ { marginRight: '8px', color: 'var(--primary)' } } />
            Чистый код и скорость — быстрая загрузка, высокий рейтинг в поиске.
          </div>
          <div className={ styles.benefit }>
            <FaRocket style={ { marginRight: '8px', color: 'var(--primary)' } } />
            БПоддержка и развитие — не бросаем проект после запуска.

          </div>

        </div>
        <div className={ styles.buttons }>
          <motion.a
            whileHover={ { scale: 1.07 } }
            whileTap={ { scale: 0.97 } }
            href="/#contact"
            onClick={ () => {
              try {
                ym(97829589, 'reachGoal', 'on_cta');
              } catch (error) { }
            } }
            className={ styles.primaryButton }
            onMouseEnter={ () => setIsHovered(true) }
            onMouseLeave={ () => setIsHovered(false) }
          >
            Получить расчёт стоимости
            <motion.span
              animate={ { x: isHovered ? 5 : 0 } }
              transition={ { duration: 0.2 } }
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </div>
        <div className={ styles.techIcons }>
          { floatingIcons.map((item, index) => (
            <motion.div
              key={ index }
              className={ styles.techIcon }
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.7, delay: 0.5 + index * 0.15 } }
              title={ item.tooltip }
              whileHover={ { scale: 1.1, rotate: 5 } }
              style={ { color: item.color } }
            >
              { item.icon }
              <span className={ styles.techTooltip }>{ item.tooltip }</span>
            </motion.div>
          )) }
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
