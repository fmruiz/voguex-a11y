import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
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
