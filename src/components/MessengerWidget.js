'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FaTelegram, FaWhatsapp, FaCommentDots, FaTimes } from 'react-icons/fa';
import styles from '@@/styles/MessengerWidget.module.css';

const MessengerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Закрытие меню при клике вне виджета
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.messengerWidget} ref={widgetRef}>
      {/* Меню мессенджеров */}
      <div className={`${styles.messengerMenu} ${isOpen ? styles.open : ''}`}>
        <a
          href="https://t.me/webstrih"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.messengerItem} ${styles.telegram}`}
          title="Написать в Telegram"
        >
          <FaTelegram size={24} />
          <span>Telegram</span>
        </a>
        <a
          href="https://wa.me/79034600881"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.messengerItem} ${styles.whatsapp}`}
          title="Написать в WhatsApp"
        >
          <FaWhatsapp size={24} />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Кнопка открытия/закрытия */}
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Закрыть меню мессенджеров' : 'Открыть меню мессенджеров'}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </button>
    </div>
  );
};

export default MessengerWidget;

