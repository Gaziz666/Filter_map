import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwither/LanguageSwitcher";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="bg-blue-600 text-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                <h1 className="text-3xl font-bold underline">My Map</h1>
                <LanguageSwitcher />
                <div className="space-x-8 text-lg">
                    <a href="/" className="hover:text-blue-300">
                        {t("home")}
                    </a>
                    <a href="/map" className="hover:text-blue-300">
                        {t("map")}
                    </a>
                </div>
            </nav>
        </header>
    );
};
