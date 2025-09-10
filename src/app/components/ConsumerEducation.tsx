// src/app/components/ConsumerEducation.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConsumerEducation() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Why Blockchain Traceability Matters
      </h2>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-md border border-green-100">
          <CardContent className="p-6 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-lg">Safe & Authentic</h3>
              <p className="text-gray-600">
                Blockchain ensures your product is genuine and tamper-proof.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-green-100">
          <CardContent className="p-6 flex items-start gap-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-lg">Sustainable & Ethical</h3>
              <p className="text-gray-600">
                Verified sourcing helps protect the environment and support fair trade.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="text-xl font-semibold mb-4">FAQs</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>How do I know it’s real?</AccordionTrigger>
            <AccordionContent>
              Because every step is recorded on blockchain, making it impossible to fake.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>What if the code doesn’t scan?</AccordionTrigger>
            <AccordionContent>
              Report a possible counterfeit so we can take action immediately.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
