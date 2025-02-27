'use client'

import React, { useState } from 'react';
import styles from '@@/styles/Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>
        <img src={ '/img/logo.png' } />
      </div>
      <nav className={ `${styles.nav} ${isMobileMenuOpen ? styles.active : ''}` }>
        <ul className={ styles.navList }>
          <li><a href="/#home">Главная</a></li>
          <li><a href="/#about">О нас</a></li>
          <li><a href="/#service">Услуги</a></li>
          <li><a href="/#portfolio">Портфолио</a></li>
          <li><a href="/#contact">Контакты</a></li>
        </ul>
      </nav>
      <div className={ styles.menuToggle } onClick={ toggleMobileMenu }>
        <span />
        <span />
        <span />
      </div>
    </header>
  );
};

export default Header;
