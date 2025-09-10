"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function BatchLookupForm() {
  const router = useRouter();
  const [barcode, setBarcode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!barcode.trim()) return;
    router.push(`/batch/${barcode}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Batch Lookup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              placeholder="Enter or scan barcode"
              value={barcode}
              onChange={(e) => setBarcode(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Lookup
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
