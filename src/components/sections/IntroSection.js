import styles from '../../styles/IntroSection.module.css';

const IntroSection = () => {
    return (
        <section className={styles.header} id='home'>
            <div className={styles.headerBackground}></div>
            <div className={styles.headerContent}>
                <h1 data-aos="fade-up">ВЕБШТРИХ</h1>
                <p className="fade-in" data-aos="fade-up" data-aos-delay="200">Создаём цифровые шедевры</p>
            </div>
        </section>
    );
};

export default IntroSection;
