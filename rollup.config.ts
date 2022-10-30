import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";

export default defineConfig({
  input: "./src/index.ts",
  output: [{
    file: "./dist/index.cjs",
    format: "commonjs",
    sourcemap: true,
  }, {
    file: "./dist/index.mjs",
    format: "esm",
    sourcemap: true,
  }],
  external: ["comlink", "electron"],
  plugins: [typescript({ noEmitOnError: true }), nodeResolve(), terser()],
});