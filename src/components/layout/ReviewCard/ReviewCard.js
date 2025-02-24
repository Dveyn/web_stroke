import styles from './ReviewCard.module.css';

export const ReviewCard = () => {
  return (
    <section className={styles.reviews}>
      <div className="container">
        <h2>Отзывы наших клиентов</h2>
        <div className={styles.reviewCards}>
          <div className={styles.reviewCard}>
            <p>Сайт получился просто потрясающим, спасибо за отличную работу!</p>
            <h4>Алексей П.</h4>
          </div>
          <div className={styles.reviewCard}>
            <p>Отличная команда, разработали приложение, которое увеличило наши продажи!</p>
            <h4>Марина К.</h4>
          </div>
          <div className={styles.reviewCard}>
            <p>Профессиональный подход и поддержка на всех этапах.</p>
            <h4>Иван С.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
