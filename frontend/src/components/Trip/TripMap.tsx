'use client';

import { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import TripPopup from './TripPopup';

import './TripMap.css';

const position: LatLngExpression = [36, 127];

const TripMap = () => {
  return (
    <div className="w-screen h-screen">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="w-screen h-screen"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TripPopup position={position} />
      </MapContainer>
    </div>
  );
};

export default TripMap;
