import React, { createContext, useState, useContext } from "react";
import en from "../locales/en";
import no from "../locales/no";

const languages = {
  en: { code: "en", label: "English", flag: "GB", translations: en },
  no: { code: "no", label: "Norsk", flag: "NO", translations: no },
};

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [languageCode, setLanguageCode] = useState("en");

  const value = {
    languageCode,
    setLanguageCode,
    t: (key) => {
      const lang = languages[languageCode];
      const keys = key.split(".");
      return keys.reduce((acc, curr) => acc?.[curr], lang.translations) || key;
    },
    availableLanguages: languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
