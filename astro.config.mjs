import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const env = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  ""
);

const siteURL =
  process.env.PUBLIC_SITE_URL ||
  env.PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:4321";

export default defineConfig({
  site: siteURL,

  redirects: {
    "/projetos/empresa-irmao": "/projetos/rs-experiences",
  },

  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname.replace(/\/+$/, "") !== "/obrigado",
    }),
  ],
});