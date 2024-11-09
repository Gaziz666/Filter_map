import { IImageData } from "../../../../types.ts";
import React from "react";

type IImageRowProps = IImageData;

export const ImageRow = React.memo(
    ({ name, image, type, createdDate }: IImageRowProps) => {
        return (
            <li className="flex images-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 rounded-full mr-4"
                />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                        {name}
                    </h3>
                    <p className="text-gray-500">{createdDate}</p>
                </div>
                <span className="text-sm text-gray-700 font-medium bg-blue-100 py-1 px-3 rounded-full">
                    {type}
                </span>
            </li>
        );
    },
);
