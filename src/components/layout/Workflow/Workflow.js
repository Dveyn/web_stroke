'use client'; // Директива для клиентского компонента

import { useEffect, useRef } from 'react';
import styles from './Workflow.module.css';

export const Workflow = () => {

  return (
    <section className={styles.workflow}>
      <div className={styles.container}>
        <h2 className={styles.title}>Как мы работаем</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>01</span>
            <h3 className={styles.stepTitle}>Анализ и планирование</h3>
            <p className={styles.stepDescription}>
              Мы изучаем ваши потребности и создаем индивидуальный план действий, чтобы обеспечить максимальный успех.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>02</span>
            <h3 className={styles.stepTitle}>Дизайн</h3>
            <p className={styles.stepDescription}>
              Создаем стильный и удобный интерфейс, который идеально сочетается с вашими целями и задачами.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>03</span>
            <h3 className={styles.stepTitle}>Разработка</h3>
            <p className={styles.stepDescription}>
              Реализуем продвинутые функции с использованием современных технологий, обеспечивая высочайшее качество.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>04</span>
            <h3 className={styles.stepTitle}>Тестирование и запуск</h3>
            <p className={styles.stepDescription}>
              Проводим всестороннюю проверку и подготовку к запуску, чтобы продукт был готов к успешному внедрению.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
