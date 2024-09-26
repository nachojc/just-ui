import path from "node:path";
import { defineConfig, normalizePath } from "vite";
import sass from "sass";

import dts from "vite-plugin-dts";
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
    dts({}),
    copy({
      targets: [{ src: resolve("src/assets"), dest: resolve("dist/assets") }],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
