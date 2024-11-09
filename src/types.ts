export type ImageType = "Image" | "Video";
export interface IImageData {
    id: number;
    name: string;
    image: string;
    type: ImageType;
    createdDate: string;
}

export interface IFilterParams {
    type: number;
    name: string | null;
    startDate: string | null;
    endDate: string | null;
    page: number;
    pageSize: number;
}
