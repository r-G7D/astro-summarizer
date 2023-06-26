interface SummaryResponse {
  summary_text: string
}

export async function getSummary(text: string): Promise<string> {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
        {
            headers: { Authorization: `Bearer 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` },
            method: "POST",
            body: JSON.stringify(text),
        }
    );
    const result = await response.json() as SummaryResponse[];
    return result[0].summary_text;
}