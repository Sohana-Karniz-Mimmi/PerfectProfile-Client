/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Vitest এর জন্য globals true করে রাখো
    environment: "jsdom", // DOM environment ব্যবহারের জন্য
  },
});
