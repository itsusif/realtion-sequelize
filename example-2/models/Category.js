const sequelize = require('../index');
const { DataTypes } = require('sequelize');

const Category = sequelize.define('categories', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: true
});

module.exports = Category;