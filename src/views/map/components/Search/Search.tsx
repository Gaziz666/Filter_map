import React from "react";
import { OPEN_STREET_MAP_URL } from "../../constants/constants.ts";
import { useTranslation } from "react-i18next";

interface ISearchProps {
    address: string;
    setAddress: (address: string) => void;
    setPosition: (num: [number, number]) => void;
}
export const Search = ({ address, setAddress, setPosition }: ISearchProps) => {
    const { t } = useTranslation();
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!address) return;

        try {
            const response = await fetch(
                `${OPEN_STREET_MAP_URL}/search?format=json&q=${encodeURIComponent(
                    address,
                )}`,
            );
            const results = await response.json();

            if (results.length > 0) {
                const { lat, lon } = results[0];
                setPosition([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert("Address not found");
            }
        } catch (error) {
            console.error("Geocoding error:", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">
                {t("find_location")}
            </h2>
            <form onSubmit={handleSearch} className="mb-4">
                <input
                    type="text"
                    value={address}
                    onChange={handleChange}
                    placeholder={t("enter_address")}
                    className="p-2 border rounded-md w-full mb-2"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    {t("search")}
                </button>
            </form>
        </>
    );
};
