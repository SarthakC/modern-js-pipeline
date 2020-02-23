import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const dist = "dist/bundle";
const production = !process.env.ROLLUP_WATCH_PROD;

export default {
  input: "src/index.js",
  external: ["react"],
  output: [
    {
      file: `${dist}.cjs.js`,
      format: "cjs"
    },
    {
      file: `${dist}.esm.js`,
      format: "esm"
    },
    {
      name: "ReactCssSpinners",
      file: `${dist}.umd.js`,
      globals: {
        react: "React"
      },
      format: "umd"
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    production && terser()
  ]
};
