import Header from "@@/components/layout/Header";
import "../styles/globals.css";
import Footer from "@@/components/layout/Footer";
import CookieConsent from '../components/CookieConsent';
import MessengerWidget from '../components/MessengerWidget';
import Trackers from "@@/utils/Trackers";
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="yandex-verification" content="cfdccd405acae9f8" />
        <meta name="google-site-verification" content="your-google-site-verification" />
        <meta name="description" content="Создаём современные сайты и веб-приложения для бизнеса. Разработка на Next.js, React, TypeScript. Более 100 успешных проектов." />
        <meta name="keywords" content="веб-студия, разработка сайтов, веб-приложения, Next.js, React, TypeScript, Ростов-на-Дону, digital-агентство, IT-услуги, сайт для бизнеса, ВебШтрих" />
        <meta property="og:title" content="ВебШтрих — разработка сайтов и веб-приложений" />
        <meta property="og:description" content="Создаём современные сайты и веб-приложения для бизнеса. Разработка на Next.js, React, TypeScript. Более 100 успешных проектов." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webstroke.ru/" />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ВебШтрих — разработка сайтов и веб-приложений" />
        <meta name="twitter:description" content="Создаём современные сайты и веб-приложения для бизнеса. Разработка на Next.js, React, TypeScript. Более 100 успешных проектов." />
        <meta name="twitter:image" content="/img/logo.png" />
        {/* Mail.ru Top counter */}
        <Script id="mailru-counter" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            var _tmr = window._tmr || (window._tmr = []);
            _tmr.push({id: "3689080", type: "pageView", start: (new Date()).getTime()});
            (function (d, w, id) {
              if (d.getElementById(id)) return;
              var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
              ts.src = "https://top-fwz1.mail.ru/js/code.js";
              var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
              if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window, "tmr-code");
          `
        }} />
        <noscript>
          <div>
            <img src="https://top-fwz1.mail.ru/counter?id=3689080;js=na" style={{position: 'absolute', left: '-9999px'}} alt="Top.Mail.Ru" />
          </div>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ВебШтрих",
          "url": "https://webstroke.ru",
          "logo": "https://webstroke.ru/img/logo.png",
          "description": "Веб-студия по разработке сайтов и веб-приложений",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Вавилова, д. 49, офис 111",
            "addressLocality": "Ростов-на-Дону",
            "addressRegion": "Ростовская область",
            "postalCode": "344000",
            "addressCountry": "RU"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7-800-600-98-33",
            "contactType": "customer service",
            "email": "info@webstroke.ru"
          },
          "sameAs": [
            "https://vk.com/webstroke",
            "https://t.me/webstroke",
            "https://t.me/webstrih",
            "https://wa.me/79034600881"
          ]
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://webstroke.ru/" },
            { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://webstroke.ru/services" },
            { "@type": "ListItem", "position": 3, "name": "Портфолио", "item": "https://webstroke.ru/portfolio" }
          ]
        })}} />
      </head>
      <body>
        <Header />
        { children }
        <Footer />
        <CookieConsent />
        <MessengerWidget />
        <Trackers />
      </body>
    </html>
  );
}
