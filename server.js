// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// Require our models for syncing
var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));


// Routes
require("./routes/api-routes.js")(app);

// Syncing sequelize models and starting Express app
db.sequelize.sync({ force: true }).then(function (){
    app.listen(PORT, function (){
        console.log("App listening on PORT " + PORT);
    });
});