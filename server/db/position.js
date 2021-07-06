const {DataTypes} = require("sequelize");
const db = require("./db");

const PositionModel = db.define("position", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    referencePhoto: {
        type: DataTypes.STRING(1000),
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = PositionModel;