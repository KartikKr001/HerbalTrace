import { BatchData } from "../../global";

export const sampleBatches: BatchData[] = [
  {
    product: "Ashwagandha Root Extract",
    batchId: "BATCH-001",
    expiry: "2026-08-15",
    verified: true,

    collection: {
      location: "Rishikesh, Uttarakhand",
      lat: 30.0869,
      lng: 78.2676,
      date: "2025-01-12",
      collector: "Ramesh Kumar",
    },

    processing: {
      facility: "Herbal Processing Center, Haridwar",
      date: "2025-01-20",
      step: "Drying & Grinding",
    },

    qualityTest: {
      date: "2025-01-25",
      moisture: "5%",
      pesticides: "None detected",
      dna: "Verified",
      labName: "Delhi Herbal Testing Lab",
      certificateUrl: "/certs/BATCH-001-quality.pdf",
    },

    formulation: {
      date: "2025-02-01",
      packaged: "Mumbai Packaging Facility",
    },

    sustainability: {
      nmpbGuidelines: true,
      organicCertified: true,
      fairTrade: true,
      farmer: {
        name: "Ramesh Kumar",
        yearsOfExperience: 12,
        photoUrl: "/images/farmer-ramesh.jpg",
        story: "Ramesh has been cultivating Ashwagandha sustainably for over 12 years, ensuring soil health and fair trade practices.",
      },
    },

    blockchain: {
      transactionHash: "0xabc123efg456hij789",
      explorerUrl: "https://explorer.hyperledger.org/tx/0xabc123efg456hij789",
    },
  },
];
