const sequelize = require('../');
const { DataTypes } = require('sequelize');

const School = sequelize.define('school', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
});

module.exports = School;