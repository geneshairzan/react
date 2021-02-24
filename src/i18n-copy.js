import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "lang/en";
import id from "lang/id";
// import axios from "axios";

const fallbackLng = ["id"];
const availableLanguages = ["en", "id"];

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

// const resources2 = async () => {
//   const data = {
//     en: {
//       translation: await axios
//         .get("http://localhost/sx/public/lang/en.json")
//         .then((res) => {
//           return res.data;
//         }),
//     },
//     id: {
//       translation: await axios
//         .get("http://localhost/sx/public/lang/id.json")
//         .then((res) => {
//           return res.data;
//         }),
//     },
//   };
//   return data;
// };

const backendOptions = {
  // type: "backend",
  // crossDomain: false,
  // allowMultiLoading: false,
  // loadPath: "http://localhost/sx/public/lang/{{lng}}.json",
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // backend: backendOptions,
    fallbackLng,
    resources,

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
