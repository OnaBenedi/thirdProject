import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-browser-languagedetector";

i18n
  //load translation
  .use(HttpApi)
  //detect user language
  .use(LanguageDetector)
  //apass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: `/locales/{{lng}}/translation.json`, // Ruta a tus archivos de traducción
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
