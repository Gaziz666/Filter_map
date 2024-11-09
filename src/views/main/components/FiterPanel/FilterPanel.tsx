import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
    type: number;
    name: string | null;
    startDate: string | null;
    endDate: string | null;
}

export const FilterPanel = ({ type, name, startDate, endDate }: IProps) => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const { t } = useTranslation();
    const queryParams = new URLSearchParams(search);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;

        queryParams.set(name, String(value));
        navigate({ search: queryParams.toString() });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO with api
    };

    return (
        <section className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                {t("filters")}
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4"
            >
                <div className="flex flex-1 space-x-2">
                    <div className="flex-1">
                        <label
                            htmlFor="startDate"
                            className="block text-gray-700"
                        >
                            {t("start_date")}
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={startDate || ""}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex-1">
                        <label
                            htmlFor="endDate"
                            className="block text-gray-700"
                        >
                            {t("end_date")}
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={endDate || ""}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <label htmlFor="text" className="block text-gray-700">
                        {t("name")}
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="name"
                        value={name || ""}
                        onChange={handleChange}
                        placeholder="Enter text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="flex-1">
                    <label htmlFor="select" className="block text-gray-700">
                        {t("image_type")}
                    </label>
                    <select
                        id="select"
                        name="type"
                        value={type}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="">{t("choose_option")}</option>
                        <option value="0">{t("image")}</option>
                        <option value="1">{t("Video")}</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="self-end md:ml-4 mt-4 md:mt-0 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
                >
                    {t("search")}
                </button>
            </form>
        </section>
    );
};
