import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";

export const useNavigateParams = () => {
    const navigate = useNavigate();
    const { search } = useLocation();

    const queryParams = useMemo(() => new URLSearchParams(search), [search]);

    const handleChangeQueryParams = useCallback(
        (name: string, value: string | number) => {
            queryParams.set(name, String(value));
            navigate({ search: queryParams.toString() });
        },
        [navigate, queryParams],
    );

    return { handleChangeQueryParams };
};
