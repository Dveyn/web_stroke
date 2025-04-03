"use client"

import styles from '../../styles/IntroSection.module.css';
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiFigma, SiJavascript } from "react-icons/si";
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
        <section className={styles.header} id='home'>
            <div className={styles.animatedBackground}></div>
            <div className={styles.headerOverlay}></div>
            <div className={styles.headerContent}>
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000}>
                    <motion.h1
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className={styles.tiltText}
                    >
                      ВЕБШТРИХ
                    </motion.h1>
                </Tilt>
                <p className="fade-in" data-aos="fade-up" data-aos-delay="200">Сайты, которые продают. Решения, которые работают.</p>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="/#contact"
                  className={`${styles.ctaButton} ${styles.ctaAnimation}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  Заказать сайт
                </motion.a>
            </div>
            <div className={styles.floatingIcons}>
              {floatingIcons.map((item, index) => (
                <motion.div 
                  key={index}
                  className={styles.floatingIcon}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [20, -20, 20] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: index * 0.3 }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
        </section>
    );
};

export default IntroSection;
