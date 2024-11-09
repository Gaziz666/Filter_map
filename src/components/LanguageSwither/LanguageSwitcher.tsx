import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState<string>(i18n.language);

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            i18n.changeLanguage(savedLang);
            setSelectedLang(savedLang);
        }
    }, [i18n]);

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = event.target.value;
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
        setSelectedLang(lang);
    };

    return (
        <div className="relative">
            <select
                onChange={changeLanguage}
                className="bg-blue-600 text-white px-3 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={selectedLang}
            >
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="kz">Kazakh</option>
            </select>
        </div>
    );
};
