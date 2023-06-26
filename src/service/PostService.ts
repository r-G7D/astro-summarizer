import PocketBase from "pocketbase";

const PostsCollection = "posts";
const ServicePath = "https://astro-summarizer.pockethost.io/";
const pb = new PocketBase(ServicePath);

export interface Post {
  id: string;
  text: string;
  summary: string;
}

export async function savePost(text: string, summary: string): Promise<string> {
  return pb.collection(PostsCollection).create({
    text,
    summary,
  });
}

export async function getRecentPost(): Promise<Post | null> {
  const resp = await pb.collection(PostsCollection).getList<Post>(0, 1, {
    sort: "-created",
  });

  return resp.items.length > 0 ? resp.items[0] : null;
}

export async function getPost(id: string): Promise<Post | null> {
  return await pb.collection(PostsCollection).getOne(id);
}

export function savePostLocal(text: string, summary: string): void {
  localStorage.setItem("text", text);
  localStorage.setItem("summary", summary);
}

export async function getRecentPostLocal(): Promise<Post | null> {
  const text = await localStorage.getItem("text");
  const summary = await localStorage.getItem("summary");
  if (!text || !summary) return null;
  return {
    id: "local",
    text: text || "",
    summary: summary || "",
  };
}
