'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { BatchData } from '../../../global';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface LeafletIconDefaultPrototype {
  _getIconUrl?: () => string;
}

interface CollectionMapProps {
  batch: BatchData;
}

export default function CollectionMap({ batch }: CollectionMapProps) {
  const { lat, lng, location, collector } = batch.collection;
  const { product } = batch;

  useEffect(() => {
    (async () => {
      const L = await import('leaflet');
      const proto = L.Icon.Default.prototype as LeafletIconDefaultPrototype;
      delete proto._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    })();
  }, []);

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
      <MapContainer center={[lat, lng]} zoom={7} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            🌱 <strong>{product}</strong> <br />
            {location} <br />
            Farmer: {collector}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
