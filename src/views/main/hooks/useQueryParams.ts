import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
    const { search } = useLocation();
    const queryParams = useMemo(() => new URLSearchParams(search), [search]);
    const type = Number(queryParams.get("type"));
    const pageSize = queryParams.get("pageSize")
        ? Number(queryParams.get("pageSize"))
        : 10;
    const page = queryParams.get("page") ? Number(queryParams.get("page")) : 1;
    const name = queryParams.get("name");
    const startDate = queryParams.get("startDate");
    const endDate = queryParams.get("endDate");

    return useMemo(
        () => ({
            page,
            pageSize,
            type,
            name,
            startDate,
            endDate,
        }),
        [page, pageSize, type, name, startDate, endDate],
    );
};
