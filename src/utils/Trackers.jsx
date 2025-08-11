"use client";

import { useEffect, useState } from "react";
import YandexMetrika from "@@/utils/YandexMetrika";

export default function Trackers() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    try {
      const consent = typeof window !== "undefined" && localStorage.getItem("cookieConsent");
      if (consent === "true") {
        setAllowed(true);
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (!allowed) return;
    // Inject Jivo widget once consent is granted
    const existing = document.querySelector('script[src*="code.jivo.ru/widget/"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "//code.jivo.ru/widget/F4izd3z8dt";
      s.async = true;
      document.body.appendChild(s);
    }
  }, [allowed]);

  if (!allowed) return null;
  return <YandexMetrika />;
}


