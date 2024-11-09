import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
    useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { OPEN_STREET_MAP_URL } from "../../constants/constants.ts";

interface IMapContainerProps {
    address: string;
    setAddress: (address: string) => void;
    setPosition: (num: [number, number]) => void;
    position: [number, number];
}
export const MapComponent = ({
    address,
    setAddress,
    setPosition,
    position,
}: IMapContainerProps) => {
    const UpdateMapView = ({ position }: { position: [number, number] }) => {
        const map = useMap();
        map.setView(position, 13);
        return null;
    };

    const getAddressFromCoords = async (lat: number, lon: number) => {
        try {
            const response = await fetch(
                `${OPEN_STREET_MAP_URL}/reverse?format=json&lat=${lat}&lon=${lon}`,
            );
            const data = await response.json();
            setAddress(data.display_name || "Address not found");
        } catch (error) {
            console.error("Reverse geocoding error:", error);
            alert("Error retrieving address");
        }
    };

    const MapClickHandler = () => {
        useMapEvents({
            click: (event) => {
                const { lat, lng } = event.latlng;
                setPosition([lat, lng]);
                getAddressFromCoords(lat, lng);
            },
        });
        return null;
    };

    return (
        <div className="w-full h-96">
            <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Location: {address}</Popup>
                </Marker>
                <UpdateMapView position={position} />
                <MapClickHandler />
            </MapContainer>
        </div>
    );
};
