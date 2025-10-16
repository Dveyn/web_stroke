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

  if (!allowed) return null;
  return <YandexMetrika />;
}


