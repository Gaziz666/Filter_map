import { useTranslation } from "react-i18next";

interface IPaginationProps {
    page: number;
    pageSize: number;
    totalPages: number;
    setPageNumber: (val: number) => void;
    setPageSize: (val: number) => void;
}

export const Pagination = ({
    page,
    pageSize,
    totalPages,
    setPageNumber,
    setPageSize,
}: IPaginationProps) => {
    const { t } = useTranslation();
    const handlePageChange = (pageNumber: number) => {
        setPageNumber(pageNumber);
    };

    const handleItemsPerPageChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setPageSize(Number(event.target.value));
        setPageNumber(1);
    };

    const rangeSize = 5; // Number of pages to show around the current page
    const pageStart = Math.max(page - Math.floor(rangeSize / 2), 1);
    const pageEnd = Math.min(pageStart + rangeSize - 1, totalPages);

    const pageNumbers = Array.from(
        { length: pageEnd - pageStart + 1 },
        (_, index) => pageStart + index,
    );

    return (
        <div className="flex items-center justify-between mt-6 flex-col sm:flex-row">
            <div className="flex items-center mb-4 sm:mb-0">
                <label htmlFor="itemsPerPage" className="mr-2 text-gray-700">
                    {t("item_per_page")}:
                </label>
                <select
                    id="itemsPerPage"
                    value={pageSize}
                    onChange={handleItemsPerPageChange}
                    className="px-2 py-1 border border-gray-300 rounded-md text-sm"
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>

            <div className="flex items-center space-x-2">
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 text-sm"
                >
                    {t("previous")}
                </button>

                {pageNumbers.map((pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-4 py-2 rounded-md text-sm ${
                            page === pageNum
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                        }`}
                    >
                        {pageNum}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 text-sm"
                >
                    {t("next")}
                </button>
            </div>
        </div>
    );
};
