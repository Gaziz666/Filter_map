import { IFilterParams, ImageType } from "../types.ts";
import { mockDate } from "../mocks.ts";

export const fetchImages = async (params: Partial<IFilterParams>) => {
    const { pageSize, page, name, type, startDate, endDate } = params;
    const imageType: ImageType = type === 0 ? "Image" : "Video";
    const filteredData = mockDate.filter((image) => {
        let nameIncludes = true;
        let typeRelated = true;
        let isMoreThenStartDate = true;
        let isLessThenStartDate = true;
        if (name) {
            nameIncludes = image.name
                .toLowerCase()
                .includes(name.toLowerCase());
        }
        if (type) {
            typeRelated = image.type === imageType;
        }
        if (startDate) {
            isMoreThenStartDate =
                new Date(image.createdDate).getTime() >=
                new Date(startDate).setUTCHours(0, 0, 0, 0);
        }
        if (endDate) {
            isLessThenStartDate =
                new Date(image.createdDate).getTime() <=
                new Date(endDate).setUTCHours(23, 59, 59, 59);
        }
        return (
            nameIncludes &&
            typeRelated &&
            isMoreThenStartDate &&
            isLessThenStartDate
        );
    });
    const slisedData = filteredData.slice(
        (page! - 1) * pageSize!,
        pageSize! * page! + 1,
    );

    return Promise.resolve({
        data: slisedData,
        totalCount: filteredData.length,
    });
};
