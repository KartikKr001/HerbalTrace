"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { BatchData } from "../../../global";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface CollectionMapProps {
  batch: BatchData;
}

export default function CollectionMap({ batch }: CollectionMapProps) {
  const { lat, lng, location, collector } = batch.collection;

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
      <MapContainer center={[lat, lng]} zoom={7} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            🌱 <strong>{batch.product}</strong> <br />
            {location} <br />
            Farmer: {collector}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
