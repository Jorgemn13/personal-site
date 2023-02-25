import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://itsjorge.tech",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    svelte(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],
});
