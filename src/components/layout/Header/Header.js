import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={ styles.header }>
      <Link href="/" className={ styles.logo }>ВебШтрих</Link>
      <nav className={ styles.nav }>
        <ul>
          <li><a href="/about">О нас</a></li>
          <li><a href="/advantages">Преимущества</a></li>
          <li><a href="/reviews">Отзывы</a></li>
          <li><a href="/contact">Контакты</a></li>
        </ul>
      </nav>
      <div className={ styles.headerActions }>
        <a href="tel:+1234567890" className={ styles.phone }>Позвонить</a>
      </div>
    </header>
  );
};
