'use client';

import { sampleBatches } from '@/utils/sampleData';
import { useParams } from 'next/navigation';
import React from 'react';
import ProductSummaryCard from '@/app/components/ProductSummaryCard';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Temp = () => {
  const params = useParams();
  const batchIdParam = params?.batch_id;

  // Handle string[] case
  const batchId = Array.isArray(batchIdParam) ? batchIdParam[0] : batchIdParam;
  const batch = sampleBatches.find((b) => b.batchId === batchId);

  if (!batch) {
    return (
      <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
        <Card className="w-full max-w-md shadow-lg text-center">
          <CardContent className="p-6">
            <p className="text-gray-600 text-lg mb-4">❌ Batch not found.</p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/verify">Back to Verify</Link>
            </Button>
          </CardContent>
        </Card>
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
