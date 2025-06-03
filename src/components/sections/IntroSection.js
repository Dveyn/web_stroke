"use client"

import styles from '../../styles/IntroSection.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiFigma, SiJavascript } from "react-icons/si";
import { FaArrowRight } from 'react-icons/fa';
import aosInit from '@@/utils/aosInit';
import { useEffect } from 'react';

const IntroSection = () => {
    const floatingIcons = [
      { icon: <SiReact />, alt: "React" },
      { icon: <SiNextdotjs />, alt: "Next.js" },
      { icon: <SiTypescript />, alt: "TypeScript" },
      { icon: <SiFigma />, alt: "Figma" },
      { icon: <SiJavascript />, alt: "JavaScript" },
    ];

    useEffect(() => {
      aosInit();
    }, []);

    return (
        <section className={styles.intro} id="home">
            <div className={styles.heroCard}>
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={900} transitionSpeed={900} glareEnable={false}>
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
                    100+ успешных проектов для клиентов по всей России
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
                    >
                      Заказать сайт <FaArrowRight />
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
                        title={item.alt}
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
