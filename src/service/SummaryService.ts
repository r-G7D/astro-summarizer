interface SummaryResponse {
  summary_text: string
}

export async function getSummary(text: string): Promise<string> {
  const token = import.meta.env.PUBLIC_API_TOKEN;
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: `Bearer ${token}` },
            method: "POST",
            body: JSON.stringify(text),
        }
    );
    const result = await response.json() as SummaryResponse[];
    return result[0].summary_text;
}