const newRoute = require("./news");
const siteRoute = require("./site");

function route(app) {
  app.use("/news", newRoute);

  app.use("/", siteRoute);

  // Query parameter thì .query còn form data .body
}

module.exports = route;
