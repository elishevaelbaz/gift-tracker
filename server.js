
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

var routes = require("./routes");

var scrape = require("./scripts/scrape.js")

// making the public folder into a static directory
app.use(express.static("public"));

// connect handlebars to express app
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// have the requests go through the route middlware+
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local giftTracker database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/giftTracker";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI
// 	, {useMongoClient: true}
);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});

