
import Header from "@@/components/layout/Header";
import "../styles/globals.css";
import Footer from "@@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/img/favicon.png"></link>
      </head>
      <body>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  );
}
