"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Factory, FlaskConical, Package } from "lucide-react";
import { BatchData } from "../../../global";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// ✅ Dynamically import react-pdf parts
const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  { ssr: false }
);
const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  { ssr: false }
);

// ✅ Leaflet dynamic import
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

interface JourneyTimelineProps {
  batch: BatchData;
}

export default function JourneyTimeline({ batch }: JourneyTimelineProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  // ✅ Configure pdf.js worker only on client
  useEffect(() => {
    (async () => {
      const { pdfjs } = await import("react-pdf");
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    })();
  }, []);

  const steps = [
    {
      title: "Collection",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      left: (
        <>
          <p><strong>Farmer:</strong> {batch.collection.collector}</p>
          <p><strong>Location:</strong> {batch.collection.location}</p>
          <p><strong>Date:</strong> {batch.collection.date}</p>
          <p><strong>GPS:</strong> {batch.collection.lat}, {batch.collection.lng}</p>
          <a href="#" className="text-blue-600 underline">🔗 See blockchain hash</a>
        </>
      ),
      right: (
        <div className="w-full h-40 rounded-lg overflow-hidden shadow">
          <MapContainer
            center={[batch.collection.lat, batch.collection.lng]}
            zoom={10}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[batch.collection.lat, batch.collection.lng]} />
          </MapContainer>
        </div>
      ),
    },
    {
      title: "Processing",
      icon: <Factory className="w-6 h-6 text-gray-700" />,
      left: (
        <>
          <p><strong>Facility:</strong> {batch.processing.facility}</p>
          <p><strong>Step:</strong> {batch.processing.step}</p>
          <p><strong>Date:</strong> {batch.processing.date}</p>
        </>
      ),
      right: (
        <div className="text-sm text-gray-500 italic">🏭 Processing in progress</div>
      ),
    },
    {
      title: "Quality Test",
      icon: <FlaskConical className="w-6 h-6 text-purple-600" />,
      left: (
        <>
          <p><strong>Moisture:</strong> {batch.qualityTest?.moisture}</p>
          <p><strong>Pesticides:</strong> {batch.qualityTest?.pesticides}</p>
          <p><strong>DNA:</strong> {batch.qualityTest?.dna}</p>
        </>
      ),
      right: (
        <div className="flex flex-col items-center">
          {/* PDF Thumbnail */}
          <div className="w-28 h-36 bg-gray-100 border rounded shadow overflow-hidden">
            <Document
              file="/certificates/sample-certificate.pdf"
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              <Page pageNumber={1} width={100} />
            </Document>
          </div>
          <a
            href="/certificates/sample-certificate.pdf"
            target="_blank"
            className="mt-2 text-blue-600 underline text-sm"
          >
            📄 Download Certificate
          </a>
        </div>
      ),
    },
    {
      title: "Packaging & Distribution",
      icon: <Package className="w-6 h-6 text-amber-600" />,
      left: (
        <>
          <p><strong>Batch ID:</strong> {batch.batchId}</p>
          <p><strong>Formulation:</strong> {batch.formulation?.packaged}</p>
          <p><strong>Date:</strong> {batch.formulation?.date}</p>
          <p><strong>Expiry:</strong> {batch.expiry}</p>
        </>
      ),
      right: (
        <div className="text-sm text-gray-500">📦 Ready for dispatch</div>
      ),
    },
  ];

  return (
    <div className="relative border-l-2 border-gradient-to-b from-green-500 via-purple-500 to-amber-500 pl-8 space-y-10">
      {steps.map((step, idx) => (
        <div key={idx} className="relative group">
          {/* Icon Bubble */}
          <div className="absolute -left-14 flex items-center justify-center w-12 h-12 bg-gradient-to-tr from-green-100 to-white border-2 border-gray-300 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
            {step.icon}
          </div>

          {/* Full-Width Card */}
          <Card className="w-full shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">{step.title}</h3>

              {/* Two-Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-sm text-gray-700 space-y-1 leading-relaxed">
                  {step.left}
                </div>
                <div className="flex items-center justify-start md:justify-end text-sm w-full">
                  {step.right}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
