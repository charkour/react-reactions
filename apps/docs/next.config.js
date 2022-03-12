const withTM = require("next-transpile-modules")(["@charkour/react-reactions"]);

module.exports = withTM({
  reactStrictMode: true,
});
