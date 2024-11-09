import { IFilterParams } from "../../../../types.ts";
import { Pagination } from "../../../../components/Pagination/Pagination.tsx";
import { useCallback } from "react";
import { useNavigateParams } from "../../hooks/useNavigateParams.ts";
import { useDataList } from "./hooks/useDataList.tsx";
import { ImageRow } from "../ImageRow/ImageRow.tsx";
import { useTranslation } from "react-i18next";

export const ImageLists = (props: IFilterParams) => {
    const { pageSize, page } = props;
    const { data, totalCount } = useDataList(props);
    const { t } = useTranslation();
    const totalPages = Math.ceil(totalCount / props.pageSize);

    const { handleChangeQueryParams } = useNavigateParams();

    const handleChangePageNumber = useCallback(
        (val: number) => {
            handleChangeQueryParams("page", val);
        },
        [handleChangeQueryParams],
    );

    const handleChangePageSize = useCallback(
        (val: number) => {
            handleChangeQueryParams("pageSize", val);
        },
        [handleChangeQueryParams],
    );

    return (
        <section className="max-w-3xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                {t("list_items")}
            </h2>
            <ul className="space-y-4">
                {data.map((item) => (
                    <ImageRow {...item} key={item.id} />
                ))}
            </ul>
            <Pagination
                pageSize={pageSize}
                page={page}
                totalPages={totalPages}
                setPageNumber={handleChangePageNumber}
                setPageSize={handleChangePageSize}
            />
        </section>
    );
};
