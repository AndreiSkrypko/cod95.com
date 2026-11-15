import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { messages, type Locale, type Messages } from "./messages";

export const PHONE_BY = {
  display: "+375 (29) 356-57-78",
  href: "tel:+375293565778",
};

export const PHONE_PL = {
  display: "+48 (78) 979-90-57",
  href: "tel:+48789799057",
};

/** В первом экране один номер: русский и украинский — Минск, польский — Варшава. */
export function heroPhone(locale: Locale) {
  return locale === "pl" ? PHONE_PL : PHONE_BY;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  m: Messages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "driveprime-locale";

function isLocale(value: string | null): value is Locale {
  return value === "ru" || value === "pl" || value === "uk";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) setLocaleState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, m: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value;
}
