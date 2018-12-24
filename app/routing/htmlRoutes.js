var path = require("path");

module.exports = function(app) {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // app.get("/cats", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../data/cats.js"))
  // })

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

