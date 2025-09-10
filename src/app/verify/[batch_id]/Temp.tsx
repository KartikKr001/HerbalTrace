'use client'

import { sampleBatches } from '@/utils/sampleData';
import { useParams } from 'next/navigation';
import React from 'react';
import ProductSummaryCard from '@/app/components/ProductSummaryCard';
import Link from 'next/link';

const Temp = () => {
  const params = useParams();
  const batchIdParam = params?.batch_id;

  // handle string[] case
  const batchId = Array.isArray(batchIdParam) ? batchIdParam[0] : batchIdParam;

  const batch = sampleBatches.find((b) => b.batchId === batchId);

  if (!batch) {
    return (
      <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-6">
        <p className="text-center text-gray-600 text-lg mb-4">❌ Batch not found.</p>
        <Link
          href="/verify"
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md"
        >
          Back to Verify
        </Link>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <ProductSummaryCard batch={batch} />
    </main>
  );
};

export default Temp;
