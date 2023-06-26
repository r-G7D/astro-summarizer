const ServicePath = "http://0.0.0.0:8000"

interface SummaryResponse {
  summary_text: string
}

export async function getSummary(text: string): Promise<string> {
  const request = await fetch(`${ServicePath}/summarize?text=${text}`);
  const data = await request.json() as SummaryResponse[];
  return data[0].summary_text;
}