var path = require("path");

module.exports = function(app) {
  //basic route that sends the user first to the AJAX Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });
};


// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });
//
// //Get all userResults
// app.get("/all", function(req, res) {
//   res.json(users);
// });
