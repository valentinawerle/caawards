// @ts-check
// @ts-check
import { defineConfig } from "astro/config";

// @ts-ignore
import tailwind from "@astrojs/tailwind";

// @ts-ignore
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
