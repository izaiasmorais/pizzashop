import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { InlineConfig, type UserConfig } from "vitest/node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
	test: {
		globals: true
	},
}) as UserConfig & {
	test: InlineConfig;
};
