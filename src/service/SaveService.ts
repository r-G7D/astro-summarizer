export interface Save {
  text: string;
  summary: string;
}

export function saveLocal(text: string, summary: string): void {
  localStorage.setItem("text", text);
  localStorage.setItem("summary", summary);
}

export async function getRecentLocal(): Promise<Save | null> {
  const text = await localStorage.getItem("text");
  const summary = await localStorage.getItem("summary");
  if (!text && !summary) return null;
  return {
    text: text ?? "",
    summary: summary ?? "",
  };
}
