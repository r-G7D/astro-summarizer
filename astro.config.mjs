import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";

export const token = process.env.PUBLIC_API_TOKEN;

// https://astro.build/config
export default defineConfig({
  site: "https://r-G7D.github.io",
  base: "/astro-summarizer",
  integrations: [solidJs()],
});