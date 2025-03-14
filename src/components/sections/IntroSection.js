import styles from '../../styles/IntroSection.module.css';
import Tilt from 'react-parallax-tilt';

const IntroSection = () => {
    return (
        <section className={styles.header} id='home'>
            <div className={styles.animatedBackground}></div>
            <div className={styles.headerOverlay}></div>
            <div className={styles.headerContent}>
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000}>
                    <h1 data-aos="fade-up" className={styles.tiltText}>ВЕБШТРИХ</h1>
                </Tilt>
                <p className="fade-in" data-aos="fade-up" data-aos-delay="200">Сайты, которые продают. Решения, которые работают.</p>
                <a href="/#contact" className={`${styles.ctaButton} ${styles.ctaAnimation}`} data-aos="fade-up" data-aos-delay="400">Заказать сайт</a>
            </div>
        </section>
    );
};

export default IntroSection;
