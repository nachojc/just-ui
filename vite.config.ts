import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { normalizePath } from 'vite'
import path from 'node:path'

import { viteStaticCopy as copy } from "vite-plugin-static-copy";

import { peerDependencies, name } from "./package.json";

function resolve(relativePath: string) {
  return normalizePath(path.resolve(__dirname, relativePath));
}

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
    copy({
      targets: [{ src: resolve("src/assets"), dest: resolve("dist/assets") }],
    }),
  ]
});
