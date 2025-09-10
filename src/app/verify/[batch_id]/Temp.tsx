'use client'
import { sampleBatches } from '@/utils/sampleData';
import { useParams } from 'next/navigation';
import React from 'react'
import ProductSummaryCard from '@/app/components/ProductSummaryCard';

const Temp = () => {
    const params = useParams();
    const batch_id = params.batch_id;
    const batch = sampleBatches.find((b) => b.batchId === batch_id);
    if (!batch) {
        return <p className="text-center mt-20">Batch not found.</p>;
    }
    return (
        <main className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
        <ProductSummaryCard batch={batch} />
        </main>
    );
}

export default Temp