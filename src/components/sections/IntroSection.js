"use client";

import styles from '../../styles/IntroSection.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { FaArrowRight, FaRocket, FaCheckCircle } from 'react-icons/fa';
import aosInit from '@@/utils/aosInit';
import { useEffect, useState } from 'react';

const IntroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    aosInit();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={ styles.intro } id="home">
      <div className={ styles.backgroundElements }>
        <div className={ styles.dotsPattern }></div>
      </div>
      <div className={ styles.heroCard }>
        <div className={ styles.heroGrid }>
          <motion.div
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
          >
            <div className={ styles.badge }>
              <FaRocket style={ { fontSize: '16px' } } />
              <span>Создаем сайты, которые продают</span>
            </div>
            
            <h1 className={ styles.title }>
              Создаём сайты, которые{' '}
              <span className={ styles.titleGradient }>
                приносят клиентов и прибыль
              </span>
            </h1>
            
            <p className={ styles.subtitle }>
              Быстрые, безопасные и адаптивные сайты для малого бизнеса. Запуск от 7 дней.
            </p>

            <div className={ styles.buttons }>
              <motion.a
                whileHover={ { scale: 1.05 } }
                whileTap={ { scale: 0.95 } }
                href="/#contact"
                onClick={ (e) => {
                  e.preventDefault();
                  scrollToSection('contact');
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
              
              <motion.a
                whileHover={ { scale: 1.05 } }
                whileTap={ { scale: 0.95 } }
                href="/#portfolio"
                onClick={ (e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                } }
                className={ styles.secondaryButton }
              >
                Посмотреть работы
              </motion.a>
            </div>

            <div className={ styles.benefits }>
              <div className={ styles.benefit }>
                <div className={ styles.benefitIcon }>
                  <FaCheckCircle />
                </div>
                <div>
                  <div className={ styles.benefitTitle }>Рост продаж</div>
                  <div className={ styles.benefitDescription }>Сайты, которые реально конвертят посетителей в клиентов.</div>
                </div>
              </div>
              <div className={ styles.benefit }>
                <div className={ styles.benefitIcon }>
                  <FaCheckCircle />
                </div>
                <div>
                  <div className={ styles.benefitTitle }>Скорость запуска</div>
                  <div className={ styles.benefitDescription }>От идеи до готового проекта за 7–10 дней.</div>
                </div>
              </div>
              <div className={ styles.benefit }>
                <div className={ styles.benefitIcon }>
                  <FaCheckCircle />
                </div>
                <div>
                  <div className={ styles.benefitTitle }>Чистый код и скорость</div>
                  <div className={ styles.benefitDescription }>Быстрая загрузка, высокий рейтинг в поиске.</div>
                </div>
              </div>
              <div className={ styles.benefit }>
                <div className={ styles.benefitIcon }>
                  <FaCheckCircle />
                </div>
                <div>
                  <div className={ styles.benefitTitle }>Поддержка и развитие</div>
                  <div className={ styles.benefitDescription }>Не бросаем проект после запуска.</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={ { opacity: 0, scale: 0.95 } }
            animate={ { opacity: 1, scale: 1 } }
            transition={ { duration: 0.8, delay: 0.3 } }
            className={ styles.heroImage }
          >
            <div className={ styles.heroImageContainer }>
              <img
                src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyNDAyMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern web design workspace"
                style={ { width: '100%', height: '600px', objectFit: 'cover' } }
              />
              <div className={ styles.heroImageOverlay } />
            </div>
            
            <motion.div
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.6, delay: 0.8 } }
              className={ `${styles.floatingCard} ${styles.floatingCardBottom}` }
            >
              <div className={ styles.floatingCardLabel }>Современный UI</div>
              <div className={ styles.floatingCardValue }>Быстрая загрузка</div>
            </motion.div>
            <motion.div
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { duration: 0.6, delay: 1 } }
              className={ `${styles.floatingCard} ${styles.floatingCardTop}` }
            >
              <div className={ styles.floatingCardLabel }>Надежный код</div>
              <div className={ styles.floatingCardValue }>Интерактивность</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
