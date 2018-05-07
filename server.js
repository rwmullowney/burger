// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3030;

// Require our models for syncing
var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Setting up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

// Static directory
app.use(express.static("public"));


// Routes
require("./routes/api-routes.js")(app);

// Attempting to connect db to Heroku - I think it works?
var mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) { 
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    })
}
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


// Syncing sequelize models and starting Express app
db.sequelize.sync({ /*force: true*/ }).then(function (){
    app.listen(PORT, function (){
        console.log("App listening on PORT " + PORT);
    });
});