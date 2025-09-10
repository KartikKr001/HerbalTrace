import { BatchData } from "../../global";
import { sampleBatches } from "@/utils/sampleData"; // named import

export function getBatchById(batchId: string): BatchData | null {
  // const response = await axios.get<BatchData[]>(" -- url --");
  // const data = response.data;

  const data: BatchData[] = sampleBatches;

  return data.find((item) => item.batchId === batchId) || null;
}
