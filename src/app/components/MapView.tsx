"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { BatchData } from "../../../global";

// Fix default marker icon issue in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapViewProps {
  batch: BatchData;
}

export default function MapView({ batch }: MapViewProps) {
  // Demo coordinates for stages (replace with real coordinates if available)
  const stageLocations = [
    {
      title: "Collection",
      description: `Harvested at ${batch.collection.location} by ${batch.collection.collector} on ${batch.collection.date}`,
      lat: batch.collection.lat,
      lng: batch.collection.lng,
    },
    {
      title: "Processing",
      description: `${batch.processing.step} at ${batch.processing.facility} on ${batch.processing.date}`,
      lat: batch.collection.lat + 0.2, // demo offset
      lng: batch.collection.lng + 0.2,
    },
    {
      title: "Quality Test",
      description: batch.qualityTest
        ? `Moisture: ${batch.qualityTest.moisture}, Pesticides: ${batch.qualityTest.pesticides}, DNA: ${batch.qualityTest.dna} on ${batch.qualityTest.date}`
        : "Not tested yet",
      lat: batch.collection.lat - 1.6,
      lng: batch.collection.lng  - 1.7,
    },
    {
      title: "Formulation",
      description: batch.formulation
        ? `Packaged as ${batch.formulation.packaged} on ${batch.formulation.date}`
        : "Not packaged yet",
      lat: batch.collection.lat + 0.4,
      lng: batch.collection.lng + 0.15,
    },
  ];

  // Center map roughly at collection location
  const centerLat = batch.collection.lat;
  const centerLng = batch.collection.lng;

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <MapContainer center={[centerLat, centerLng]} zoom={6} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {stageLocations.map((stage, idx) => (
          <Marker key={idx} position={[stage.lat, stage.lng]}>
            <Popup>
              <strong>{stage.title}</strong> <br />
              {stage.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
