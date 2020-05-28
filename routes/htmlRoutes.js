var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   // db.Ingredient.findAll({}).then(function(ingredients) {
  //   res.render("index", {
  //     msg: "Welcome!"
  //     // examples: ingredients

  //     // });
  //   });
  // });
  app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
  });
  //Load search page
  app.get("/search", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/search.html"));
  });
  //
  app.get("/recipes", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/recipes.html"));
  });
  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
