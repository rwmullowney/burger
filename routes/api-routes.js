// Requiring our models
var db = require("../models");

// Declare variables
let burgers = db.Burger;
let eatenBurgers = [];
let uneatenBurgers = [];



// Routes
module.exports = function (app) {
    app.get("/", function (req, res) {
        burgers.findAll({}).then(function (dbBurgers) {
            // Filter through list to determine which burgers have and haven't been eaten
            for (let i = 0; i < dbBurgers.length; i++) {
                if (dbBurgers[i].devoured) {
                    eatenBurgers.push(dbBurgers[i]);
                }
                else { uneatenBurgers.push(dbBurgers[i]) }
            }
            // Render the page once the burgers have been sorted
            res.render("index", { eatenBurgers: eatenBurgers, uneatenBurgers: uneatenBurgers });
        });
    });
};