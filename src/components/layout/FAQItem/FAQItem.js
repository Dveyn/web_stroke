'use client'; // Директива для клиентского компонента

import { useState } from 'react';
import styles from './FAQ.module.css';

export const FAQItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className="container">
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>
        <div className={styles.faqList}>
          <div
            className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`}
            onClick={() => toggleItem(0)}
          >
            <h3 className={styles.question}>Сколько времени занимает разработка сайта?</h3>
            {activeIndex === 0 && <p className={styles.answer}>Срок разработки зависит от сложности проекта, его масштаба и особенностей. В среднем, создание простого сайта занимает от 2 до 4 недель. Для более сложных проектов срок может увеличиться до 8 недель. Мы всегда готовы обсудить сроки и найти оптимальный вариант под ваши потребности.</p>}
          </div>

          <div
            className={`${styles.faqItem} ${activeIndex === 1 ? styles.active : ''}`}
            onClick={() => toggleItem(1)}
          >
            <h3 className={styles.question}>Какие технологии вы используете?</h3>
            {activeIndex === 1 && <p className={styles.answer}>Мы используем передовые технологии для создания современных и высококачественных веб-сайтов. Основные из них: React для фронтенда, Next.js для серверного рендеринга и SEO-оптимизации, Node.js для backend-разработки и MongoDB для работы с базами данных. Мы также используем различные API-интерфейсы для интеграций с другими системами.</p>}
          </div>

          <div
            className={`${styles.faqItem} ${activeIndex === 2 ? styles.active : ''}`}
            onClick={() => toggleItem(2)}
          >
            <h3 className={styles.question}>Какие услуги вы предоставляете?</h3>
            {activeIndex === 2 && <p className={styles.answer}>Мы предоставляем полный спектр услуг в области веб-разработки, включая создание сайтов с уникальным дизайном, разработку функционала, создание интернет-магазинов, SEO-оптимизацию, поддержку и продвижение сайтов, а также консалтинг по вопросам цифровой трансформации.</p>}
          </div>

          <div
            className={`${styles.faqItem} ${activeIndex === 3 ? styles.active : ''}`}
            onClick={() => toggleItem(3)}
          >
            <h3 className={styles.question}>Какую цену имеет создание сайта?</h3>
            {activeIndex === 3 && <p className={styles.answer}>Стоимость разработки зависит от сложности проекта. Обычно она варьируется от 30 000 до 500 000 рублей и выше. Для получения точной стоимости мы можем провести бесплатную консультацию и обсудить все нюансы вашего проекта.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};
