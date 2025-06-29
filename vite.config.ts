import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/components/index.ts",
      name: "RharuowDS",
      formats: ["es", "cjs"],
      fileName: (format) => `rharuow-ds.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
