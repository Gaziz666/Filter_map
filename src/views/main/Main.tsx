import { FilterPanel } from "./components/FiterPanel/FilterPanel.tsx";
import { useQueryParams } from "./hooks/useQueryParams.ts";
import { ImageLists } from "./components/ImageList/ImageLists.tsx";

export const Main = () => {
    const { page, pageSize, type, name, startDate, endDate } = useQueryParams();
    return (
        <>
            <FilterPanel
                type={type}
                name={name}
                startDate={startDate}
                endDate={endDate}
            />
            <ImageLists
                page={page}
                pageSize={pageSize}
                type={type}
                name={name}
                startDate={startDate}
                endDate={endDate}
            />
        </>
    );
};
