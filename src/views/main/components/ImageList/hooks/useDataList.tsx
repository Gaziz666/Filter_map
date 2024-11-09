import { IFilterParams, IImageData } from "../../../../../types.ts";
import { fetchImages } from "../../../../../api/images.ts";
import { useEffect, useState } from "react";

export interface IResponseData {
    data: IImageData[];
    totalCount: number;
}

export const useDataList = (params: Partial<IFilterParams>) => {
    const [data, setData] = useState<IResponseData>({
        data: [],
        totalCount: 0,
    });
    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchImages(params);
                setData(data);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, [params]);

    return data;
};
