import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
      external: ["react", "react-dom", "react-hook-form"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-hook-form": "ReactHookForm",
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
});
