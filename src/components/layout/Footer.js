import Link from 'next/link';
import { FaVk, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Контакты</h3>
          <ul>
            {/* <li>Телефон: +7 (XXX) XXX-XX-XX</li> */}
            <li>Email: info@webstroke.ru</li>
            <li>Адрес: г. Ростов-на-Дону, ул. Вавилова, д. 49, офис 111</li>
          </ul>
        </div>
        {/* <div className="footer-section">
          <h3>Юридическая информация</h3>
          <ul>
            <li>
              <Link href="/privacy-policy">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Пользовательское соглашение</Link>
            </li>
            <li>
              <Link href="/cookie-policy">Политика использования cookies</Link>
            </li>
          </ul>
        </div> */}
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <div className="social-links">
            <a href="https://vk.com/webstroke" target="_blank" rel="noopener noreferrer">
              <FaVk />
            </a>
            <a href="https://t.me/web_stroke" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://tenchat.ru/dveyn?utm_source=4bf75246-93b7-458d-b6e0-7d36c49f8274" target="_blank" rel="noopener noreferrer">
              TenChat
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ВЕБШТРИХ. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
