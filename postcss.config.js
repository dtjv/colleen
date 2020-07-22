module.exports = {
  plugins: [
    require("postcss-import")({
      filter: (path) => {
        if (
          process.env.NODE_ENV === "production" &&
          path.includes("config.dev")
        ) {
          return false;
        }

        if (
          process.env.NODE_ENV !== "production" &&
          path.includes("config.production")
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
