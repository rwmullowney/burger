/*
NOTE: I had to add defaults for all these cause I wasn't able to seed 
my table otherwise - it would just give me errors saying that id, createdAt,
and updatedAt didn't have default values.

Might be smarter to just give manual info to the seeds to workaround this
*/

module.exports = function (sequelize, DataTypes) {
    var Burgers = sequelize
        .define("Burger", {
 
                burger_name: DataTypes.STRING,
                devoured: DataTypes.BOOLEAN
            });
    return Burgers;
}