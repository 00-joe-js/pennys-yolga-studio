const {DataTypes} = require("sequelize");
const db = require("./db");

const Signup = db.define("eBookSignup", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
});

module.exports = Signup;