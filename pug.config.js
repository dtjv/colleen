require("dotenv-safe").config();

const isPro = process.env.NODE_ENV === "production";

exports.baseurl = isPro ? process.env.BASEURL : "";
