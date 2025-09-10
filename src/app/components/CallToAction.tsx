// src/app/components/CallToAction.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Store } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-green-50 py-12 mt-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Want to Buy Verified Products?
        </h2>
        <p className="text-gray-600 mb-8">
          Look for stores selling blockchain-verified herbal products.
        </p>

        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md mb-6 flex items-center gap-2 mx-auto">
          <Store className="w-5 h-5" />
          Find Verified Stores
        </Button>

        {/* Feedback */}
        <div className="mt-6 flex justify-center gap-4">
          <p className="text-gray-700">Did this info help you?</p>
          <Button variant="outline" size="icon">
            <ThumbsUp className="w-5 h-5 text-green-600" />
          </Button>
          <Button variant="outline" size="icon">
            <ThumbsDown className="w-5 h-5 text-red-600" />
          </Button>
        </div>
      </div>
    </section>
  );
}
