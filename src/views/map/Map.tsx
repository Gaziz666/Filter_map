import React, { useState } from "react";
import { Search } from "./components/Search/Search.tsx";
import { MapComponent } from "./components/MapComponent/MapComponent.tsx";
const defaultPosition: [number, number] = [51.130083, 71.4540016];

export const Map: React.FC = () => {
    const [position, setPosition] = useState<[number, number]>(defaultPosition);
    const [address, setAddress] = useState("");

    return (
        <section className="p-6 bg-gray-100">
            <Search
                address={address}
                setAddress={setAddress}
                setPosition={setPosition}
            />
            <MapComponent
                address={address}
                setAddress={setAddress}
                setPosition={setPosition}
                position={position}
            />
        </section>
    );
};
