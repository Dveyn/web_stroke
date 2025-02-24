import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCogs, faHeadset } from '@fortawesome/free-solid-svg-icons';
import styles from './AdvantageCard.module.css';

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <h2>Наши преимущества</h2>
      <div className={styles.advantageCards}>
        <div className={styles.advantageCard}>
          <FontAwesomeIcon icon={faTachometerAlt} className={styles.icon} />
          <h3>Скорость разработки</h3>
          <p>Создаем сайты и приложения в кратчайшие сроки без потери качества.</p>
        </div>
        <div className={styles.advantageCard}>
          <FontAwesomeIcon icon={faCogs} className={styles.icon} />
          <h3>Высокое качество</h3>
          <p>Гарантируем современный дизайн и безупречный функционал.</p>
        </div>
        <div className={styles.advantageCard}>
          <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
          <h3>Поддержка 24/7</h3>
          <p>Мы всегда на связи, чтобы помочь вам на любом этапе проекта.</p>
        </div>
      </div>
    </section>
  );
};
