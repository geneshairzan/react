// ref:
// https://codesandbox.io/s/multi-language-pbt7g?from-embed=&file=/src/languageSelect.js:0-2061
// https://bigcheeseapp.com/2020/07/05/lazy-load-localisation-with-react-i18next/
//https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "lang/en";
import id from "lang/id";

const fallbackLng = ["en"];
const availableLanguages = ["en", "id"];

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
