export interface BatchData {
  product: string;
  batchId: string;
  expiry: string;
  verified: boolean;

  collection: {
    location: string;
    lat: number;
    lng: number;
    date: string;
    collector: string;
  };

  processing: {
    facility: string;
    date: string;
    step: string;
  };

  qualityTest: {
    date: string;
    moisture: string;
    pesticides: string;
    dna: string;
    labName: string;
    certificateUrl?: string; // downloadable PDF
  };

  formulation: {
    date: string;
    packaged: string;
  };

  sustainability: {
    nmpbGuidelines: boolean;
    organicCertified?: boolean;
    fairTrade?: boolean;
    farmer: {
      name: string;
      yearsOfExperience: number;
      photoUrl?: string;
      story: string;
    };
  };

  blockchain: {
    transactionHash: string;
    explorerUrl: string; // e.g. link to Hyperledger/Corda explorer
  };
}
