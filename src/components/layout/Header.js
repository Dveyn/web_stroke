'use client'

import React, { useState } from 'react';
import styles from '@@/styles/Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo} aria-label="ВЕБШТРИХ — на главную">
          <img src={'/img/logo.png'} alt="ВЕБШТРИХ" />
        </a>
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`} aria-label="Главное меню">
          <ul className={styles.navList}>
            <li><a href="/#home">Главная</a></li>
            <li><a href="/#about">О нас</a></li>
            <li><a href="/#service">Услуги</a></li>
            <li><a href="/#portfolio">Портфолио</a></li>
            <li><a href="/#contact">Контакты</a></li>
            {/* <li><a href="/blog">Блог</a></li> */}
          </ul>
        </nav>
        {/* <a href="/blog" className={styles.secondaryCta}>
          Читать блог
        </a> */}
        <a href="/#contact" className={styles.ctaButton}>
          Обсудить проект
        </a>
        <button
          className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
