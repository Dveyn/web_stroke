import Header from "@@/components/layout/Header";
import "../styles/globals.css";
import Footer from "@@/components/layout/Footer";
import YandexMetrika from "@@/utils/YandexMetrika";
import CookieConsent from '../components/CookieConsent';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/img/favicon.png"></link>
        <meta name="yandex-verification" content="cfdccd405acae9f8" />
        <YandexMetrika />
        <script src="//code.jivo.ru/widget/F4izd3z8dt" async></script>
      </head>
      <body>
        <Header />
        { children }
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
