// Requiring our models
var db = require("../models");

// Declare variables
let burgers = db.Burger;



// Routes
module.exports = function (app) {
    app.get("/", function (req, res) {
        let eatenBurgers = [];
        let uneatenBurgers = [];
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

    // Add user data
    app.post("/", function (req, res) {
        console.log(req.body);
        burgers.create({
            burger_name: req.body.burger_name
        })
            // Refreshes the burgers on the page
            .then(function (dbBurgers) {
                res.json(dbBurgers);
            });
    });

    // Updates burger as devoured
    app.put("/", function (req, res) {
        console.log(req.body);
        burgers.update({
            devoured: true
        }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbBurgers) {
                res.json(dbBurgers);
            });
    });
};