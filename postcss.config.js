module.exports = {
  plugins: [
    require("postcss-import"),
    require("precss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/pug/*.pug"],
    }),
    require("cssnano"),
  ],
};
