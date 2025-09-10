"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BatchData } from "../../../global";
import CollectionMap from "./CollectionMap";
import JourneyTimeline from "./JourneyTimeline";
import TrustAndVerification from "./TrustAndVerification";
import { Calendar, Factory, FlaskConical, Package } from "lucide-react";
import CallToAction from "./CallToAction";
import ConsumerEducation from "./ConsumerEducation";

interface BatchDetailsPageProps {
  batch: BatchData;
}

export default function BatchDetailsPage({ batch }: BatchDetailsPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white shadow-lg rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
          {/* Product Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 drop-shadow-xl">
            <Image
              src={"/images/ashwagandha-bottle.png"}
              alt={batch.product}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {batch.product}
            </h1>
            <p className="text-green-100 text-sm md:text-base">
              Batch ID:{" "}
              <span className="font-mono bg-green-800 px-2 py-1 rounded-md">
                {batch.batchId}
              </span>
            </p>

            <div>
              <Badge className="bg-white text-green-700 font-semibold text-sm px-3 py-1 shadow-md">
                {batch.verified ? "Blockchain Verified ✅" : "Unverified ❌"}
              </Badge>
            </div>

            <p className="mt-4 text-lg leading-relaxed text-green-50">
              Harvested in{" "}
              <span className="font-semibold">
                {batch.collection.location}
              </span>{" "}
              | Tested at{" "}
              <span className="font-semibold">{batch.processing.facility}</span>{" "}
              | Packaged at{" "}
              <span className="font-semibold">
                {batch.formulation?.packaged || "N/A"}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Batch Summary */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <Card className="shadow-md border border-green-100">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Batch Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div className="flex items-center gap-3">
                <Calendar className="text-green-600 w-5 h-5" />
                <p>
                  <span className="font-semibold">Expiry:</span> {batch.expiry}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Factory className="text-green-600 w-5 h-5" />
                <p>
                  <span className="font-semibold">Processing:</span>{" "}
                  {batch.processing.step} at {batch.processing.facility} (
                  {batch.processing.date})
                </p>
              </div>
              {batch.qualityTest && (
                <div className="flex items-center gap-3">
                  <FlaskConical className="text-green-600 w-5 h-5" />
                  <p>
                    <span className="font-semibold">Quality Test:</span>{" "}
                    {batch.qualityTest.moisture}, {batch.qualityTest.pesticides}
                    , DNA {batch.qualityTest.dna} ({batch.qualityTest.date})
                  </p>
                </div>
              )}
              {batch.formulation && (
                <div className="flex items-center gap-3">
                  <Package className="text-green-600 w-5 h-5" />
                  <p>
                    <span className="font-semibold">Formulation:</span>{" "}
                    {batch.formulation.packaged} ({batch.formulation.date})
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Journey Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Journey Timeline
        </h2>
        <JourneyTimeline batch={batch} />
      </section>

     <section className="max-w-6xl mx-auto px-6 py-12">
      <TrustAndVerification batch={batch} />
    </section>

    {/* Map Section */}
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Harvest Location
      </h2>
      <div className="rounded-xl overflow-hidden shadow-md border border-green-100">
        <CollectionMap batch={batch} />
      </div>
    </section>

      {/* Consumer Education */}
  <ConsumerEducation />

  {/* Call to Action */}
  <CallToAction />
   </div>
  );
}
