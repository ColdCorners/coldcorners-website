// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import { helpLinks, legalLinks, siteUrl } from "./src/site.mjs";

const indexedPaths = new Set(["/", ...[...helpLinks, ...legalLinks].map(({ href }) => href)]);

export default defineConfig({
	site: siteUrl,
	trailingSlash: "always",
	build: { inlineStylesheets: "always" },
	integrations: [sitemap({ filter: (url) => indexedPaths.has(new URL(url).pathname) })],
	adapter: cloudflare({
		imageService: "compile",
		platformProxy: {
			enabled: true,
		},
	}),
});
