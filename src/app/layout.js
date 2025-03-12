
import Header from "@@/components/layout/Header";
import "../styles/globals.css";
import Footer from "@@/components/layout/Footer";
import YandexMetrika from "@@/utils/YandexMetrika";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/img/favicon.png"></link>
        <YandexMetrika />
      </head>
      <body>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  );
}
