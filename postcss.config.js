const isPro = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    require("postcss-import")({
      filter: (path) => {
        if (
          (isPro && path.includes(".dev")) ||
          (!isPro && path.includes(".pro"))
        ) {
          return false;
        }
        return true;
      },
    }),
    require("precss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./src/pug/*.pug"],
    }),
    require("cssnano"),
  ],
};
