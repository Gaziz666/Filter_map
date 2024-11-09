import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n.use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "ru", "kz"],
        lng: "en", // default language
        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
