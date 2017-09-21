//dependencies
var express =require("express");
var bodyParser = require("body-parser");
var path = require("path");
//var friends = require("friends");

var app = express();
var port = process.env.PORT || 3000;

//express app to handle the data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api"}));

// app.get("/", function(req, res) {
//   res.send("hello");
//   console.log("connected");
// });

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

//tells the server to begin listening
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
