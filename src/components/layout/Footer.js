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
            <li>ООО ВЕБШТРИХ</li>
            <li>ИНН: 6165241979</li>
            <li>ОГРН: 1256100004038</li>
            <li>Email: info@webstroke.ru</li>
            <li>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</li>
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
