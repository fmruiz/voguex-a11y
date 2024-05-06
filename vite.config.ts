import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@voguex", replacement: resolve(__dirname, "./lib") }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "voguex-a11y",
      fileName: "voguex-a11y",
    },
  },
});
