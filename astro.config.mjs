import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
  env: {
    schema: {
      SUPABASE_URL: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
      SUPABASE_ANON_KEY: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
      SUPABASE_SERVICE_ROLE_KEY: envField.string({
        required: true,
        context: "server",
        access: "secret",
      }),
      VIDEO_ID: envField.string({
        required: true,
        context: "client",
        access: "public",
      }),
    },
  },
});
