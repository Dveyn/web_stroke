"use client";

import { useEffect } from "react";
import Script from "next/script";

const YandexMetrika = () => {
  useEffect(() => {
    console.log("🔄 YandexMetrika: Starting initialization...");

    if (typeof window === "undefined") {
      console.log(
        "❌ YandexMetrika: Window is undefined, skipping initialization",
      );
      return;
    }

    // Проверяем, не инициализирована ли уже метрика
    if (window.ym) {
      console.log("ℹ️ YandexMetrika: Already initialized, skipping");
      return;
    }

    console.log("📥 YandexMetrika: Loading script...");

    (function (m, e, t, r, i, k, a) {
      m[i] =
        m[i] ||
        function () {
          console.log("📤 YandexMetrika: Method called with args:", arguments);
          (m[i].a = m[i].a || []).push(arguments);
        };
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) {
          console.log("ℹ️ YandexMetrika: Script already exists in DOM");
          return;
        }
      }
      (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]);
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
      console.log("✅ YandexMetrika: Script added to DOM");
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    // Инициализация счетчика
    console.log("🚀 YandexMetrika: Initializing counter...");
    window.ym(97829589, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer",
    });
    console.log("✅ YandexMetrika: Counter initialized successfully");
  }, []);

  return (
    <noscript data-oid="440aq1d">
      <div data-oid="dujsz4p">
        <img
          src="https://mc.yandex.ru/watch/97829589"
          style={{ position: "absolute", left: "-9999px" }}
          alt=""
          data-oid="8v9bt2k"
        />
      </div>
    </noscript>
  );
};

export default YandexMetrika;
