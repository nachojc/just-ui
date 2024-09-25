import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies, name } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts",
      name,
      fileName: (format) => `index.${format}.js`,
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    dts({
      // rollupTypes: true
    }),
  ]
});
