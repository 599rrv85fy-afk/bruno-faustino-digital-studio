import type { APIRoute } from "astro";
import { preventIndexing } from "../utils/indexing";

export const GET: APIRoute = ({ site }) => {
  if (preventIndexing || !site) {
    return new Response(
      [
        "User-agent: *",
        "Disallow: /",
      ].join("\n"),
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      }
    );
  }

  const sitemapURL = new URL(
    "sitemap-index.xml",
    site
  ).toString();

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${sitemapURL}`,
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
};