import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Sửa lỗi icon mặc định
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "/img/icon/icon12.png",
    shadowUrl: "/img/icon/icon12.png",
});

const MapEvents = () => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                map.zoomOut();
            } else {
                map.zoomIn();
            }
        };

        map.getContainer().addEventListener("wheel", handleWheel);

        return () => {
            map.getContainer().removeEventListener("wheel", handleWheel);
        };
    }, [map]);

    return null;
};

const Map: React.FC = () => {
    const position: [number, number] = [20.9728553, 105.7598632]; // Tọa độ
    return (
        <MapContainer
            center={position}
            zoom={100}
            style={{ height: "100%", width: "100%" }}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>Vị trí của công ty</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
