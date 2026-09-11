import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const siteURL =
    process.env.PUBLIC_SITE_URL?.trim() ||
    env.PUBLIC_SITE_URL?.trim();

  return {
    site: siteURL || undefined,

    integrations: [
      ...(siteURL ? [sitemap()] : []),
    ],
  };
});