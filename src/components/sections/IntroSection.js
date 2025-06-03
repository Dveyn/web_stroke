"use client"

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
      { icon: <SiReact />, alt: "React", tooltip: "Современный UI" },
      { icon: <SiNextdotjs />, alt: "Next.js", tooltip: "Быстрая загрузка" },
      { icon: <SiTypescript />, alt: "TypeScript", tooltip: "Надежный код" },
      { icon: <SiFigma />, alt: "Figma", tooltip: "Современный дизайн" },
      { icon: <SiJavascript />, alt: "JavaScript", tooltip: "Интерактивность" },
    ];

    const benefits = [
      "Бесплатный аудит сайта",
      "Гарантия на работы",
      "Поддержка 24/7",
      "Опыт 5+ лет"
    ];

    useEffect(() => {
      aosInit();
    }, []);

    return (
        <section className={styles.intro} id="home">
            <div className={styles.heroCard}>
                <Tilt 
                  tiltMaxAngleX={10} 
                  tiltMaxAngleY={10} 
                  perspective={900} 
                  transitionSpeed={900} 
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                  glareBorderRadius="20px"
                >
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className={styles.title}
                    >
                      Сайты, которые продают. Решения, которые работают.
                    </motion.h1>
                </Tilt>
                <div className={styles.subtitle}>
                    Современные сайты и сервисы для роста вашего бизнеса
                </div>
                <div className={styles.socialProof}>
                    <FaCheckCircle style={{ marginRight: '8px', color: 'var(--primary)' }} />
                    100+ успешных проектов для клиентов по всей России
                </div>
                <div className={styles.benefits}>
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={styles.benefit}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FaRocket style={{ marginRight: '8px', color: 'var(--primary)' }} />
                            {benefit}
                        </motion.div>
                    ))}
                </div>
                <div className={styles.buttons}>
                    <motion.a
                      whileHover={{ scale: 1.07 }}
                      whileTap={{ scale: 0.97 }}
                      href="/#contact"
                      onClick={() => {
                        try {
                          ym(97829589, 'reachGoal', 'on_cta');
                        } catch (error) {}
                      }}
                      className={styles.primaryButton}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Заказать сайт 
                      <motion.span
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </motion.a>
                </div>
                <div className={styles.techIcons}>
                    {floatingIcons.map((item, index) => (
                      <motion.div
                        key={index}
                        className={styles.techIcon}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
                        title={item.tooltip}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {item.icon}
                      </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
