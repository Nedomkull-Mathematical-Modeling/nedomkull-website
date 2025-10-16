import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Use relative base so the site works when served from a subpath (e.g., GitHub Pages)
  base: "./",
  plugins: [tailwindcss(), react(), tsconfigPaths()],
});
