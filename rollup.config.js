import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "src/index.ts",
  // output: {
  //   output: "dist/index.ts",
  //   dir: "dist",
  //   format: "es",
  //   name: "loginform",
  // },
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  // plugins: [typescript({ tsconfig: "tsconfig.json" })],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"], // Ensure .jsx and .tsx are resolved
    }),
    commonjs(), // Resolve CommonJS modules
    typescript(),
  ],
});
