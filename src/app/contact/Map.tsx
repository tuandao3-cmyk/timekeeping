import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Sửa lỗi icon mặc định
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/img/icon/icon12.png',
  iconUrl: '/img/icon/icon12.png',
  shadowUrl: '/img/icon/icon12.png',
});

const Map: React.FC = () => {
  const position: [number, number] = [20.9728503,105.7624381]; // Tọa độ Hà Nội

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Vị trí của công ty
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;