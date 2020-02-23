const dist = "dist/bundle";

export default {
  input: "src/index.js",
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
      format: "umd"
    }
  ]
};
