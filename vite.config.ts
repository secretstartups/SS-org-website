import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ---------- Base path for GitHub Pages ----------
  // Change "SS-org-website" to your repo name
  base: mode === "production" ? "/SS-org-website/" : "/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // componentTagger only in dev
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ---------- OPTIONAL: nicer build output ----------
  build: {
    outDir: "dist",          // default, but explicit is fine
    sourcemap: false,        // keep false for prod
    rollupOptions: {
      // (optional) silence warnings about large chunks
    },
  },
}));