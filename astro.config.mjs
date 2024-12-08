// @ts-check
// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless"

// @ts-ignore
import tailwind from "@astrojs/tailwind";

// @ts-ignore
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
  output: "server",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});