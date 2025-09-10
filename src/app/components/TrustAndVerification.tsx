import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Recycle, Leaf } from "lucide-react";
import { BatchData } from "../../../global";

export default function TrustAndVerification({ batch }: { batch: BatchData }) {
  return (
    <div className="mt-12 space-y-8">
      {/* Sustainability & Trust */}
      <Card className="shadow-md border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Recycle className="w-6 h-6 text-green-600" />
            Sustainability & Trust
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Badge */}
            <div className="flex flex-col items-center text-center">
              <div className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                ♻️ Harvested under NMPB guidelines
              </div>
              <p className="text-gray-600 mt-2 text-sm">
                Ensuring biodiversity and responsible farming
              </p>
            </div>

            {/* Fair Trade / Organic */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/logos/organic.png"
                alt="Organic Logo"
                className="h-12 w-auto mb-2"
              />
              <p className="text-gray-600 text-sm">Certified Organic</p>
            </div>

            {/* Farmer Profile */}
            <div className="flex items-center gap-4">
              <img
                src="/images/farmer.webp"
                alt="Farmer Ramesh"
                className="w-16 h-16 rounded-full object-cover shadow"
              />
              <div>
                <p className="font-semibold">Ramesh</p>
                <p className="text-gray-600 text-sm">
                  Growing medicinal herbs for 12 years, promoting sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blockchain Verification */}
      <Card className="shadow-md border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-purple-600" />
            Blockchain Verification
          </h2>

          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm break-all">
            {batch.blockchain?.hash || "0x123abc456def789..."}
          </div>

          <a
            href={batch.blockchain?.explorerUrl || "#"}
            target="_blank"
            className="mt-3 inline-block text-blue-600 underline text-sm"
          >
            🔗 View on Explorer
          </a>

          <p className="text-gray-600 mt-2 text-sm">
            This record is tamper-proof and stored on Hyperledger/Corda.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
