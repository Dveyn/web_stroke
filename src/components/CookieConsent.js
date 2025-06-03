"use client";

import { useState, useEffect } from 'react';
import styles from '../styles/CookieConsent.module.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь согласие ранее
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieConsent}>
      <div className={styles.content}>
        <p>
          Мы используем файлы cookie для улучшения работы сайта. 
          Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie.
        </p>
        <button onClick={acceptCookies} className={styles.acceptButton}>
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent; 
