//dependencies
var express =require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

//express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api"}));

app.get("/", function(req, res) {
  console.log("connected");
})
//basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "survey.html"));
// });
//
// //Get all userResults
// app.get("/all", function(req, res) {
//   res.json(users);
// });

//tells the server to begin listening
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
