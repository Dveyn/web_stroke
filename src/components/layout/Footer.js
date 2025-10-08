import Link from 'next/link';
import { FaVk, FaTelegram } from "react-icons/fa";
import styles from '@@/styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section brand">
          <div className="logo">
            <img src="/img/logo.png" alt="ВЕБШТРИХ" />
          </div>
          <p className="description">
            Создаем современные веб-решения для развития вашего бизнеса
          </p>
        </div>

        <div className="footer-section">
          <h3 className="title">Контакты</h3>
          <ul className="links">
            <li><strong>Веб-студия ВебШтрих</strong></li>
            <li>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</li>
            <li>Тел: <a href="tel:+78006009833">8-800-600-98-33</a></li>
            <li>Email: <a href="mailto:info@webstroke.ru">info@webstroke.ru</a></li>
            <li>ИНН: 6165241979</li>
            <li>ОГРН: 1256100004038</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="title">Навигация</h3>
          <ul className="links">
            <li><Link href="/#home">Главная</Link></li>
            <li><Link href="/services/corporate-sites">Услуги</Link></li>
            <li><Link href="/case-studies/business-coach">Кейсы</Link></li>
            <li><Link href="/blog">Блог</Link></li>
            <li><Link href="/#contact">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="title">Социальные сети</h3>
          <div className="social-links">
            <a href="https://vk.com/webstroke" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaVk />
            </a>
            <a href="https://t.me/web_stroke" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTelegram />
            </a>
            <a href="https://tenchat.ru/dveyn?utm_source=4bf75246-93b7-458d-b6e0-7d36c49f8274" target="_blank" rel="noopener noreferrer" className="social-link">
              <img className="social-logo" src="/img/tenchat.png" alt="TenChat" />
            </a>
            <a href="https://set.ki/invite/DbAdUj3" target="_blank" rel="noopener noreferrer" className="social-link">
              <img className="social-logo" src="/img/setka.ico" alt="Сетка" />
            </a>
          </div>
        </div>

        <div className="footer-section footer-map">
          <h3 className="title">Мы на карте</h3>
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.8941442107491!2d39.70145607624311!3d47.235706256749984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b87c7c5d4eff%3A0x4b7317d3e2a76d85!2z0JLQtdGA0L7QstCw0YAg0JrRg9C80LXRgNC-0LvQvtCy0LAg0JLQtdC70LjQutC70LDQvdC40Lkg0J7QsdC-0YDQvNCw0Y8!5e0!3m2!1sru!2sru!4v1730998100000!5m2!1sru!2sru"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта ВебШтрих"
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">&copy; {new Date().getFullYear()} ВЕБШТРИХ. Все права защищены.</p>
          <div className="legal">
            <Link href="/privacy-policy" className="legal-link">Политика конфиденциальности</Link>
            <Link href="/terms-of-use" className="legal-link">Пользовательское соглашение</Link>
            <Link href="/cookies-policy" className="legal-link">Политика использования cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
