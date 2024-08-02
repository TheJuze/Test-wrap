import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    open: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    modules: {
      generateScopedName: "[name]_[local]_[hash:base64:5]", // for better classname view _root_VZZ6p -> App-module_root_VZZ6p
    },
  },
});
