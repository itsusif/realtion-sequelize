const sequelize = require('../index');
const { DataTypes } = require('sequelize');

const Subject = sequelize.define('subject', {
    name: {
        type: DataTypes.STRING(50)
    }
});

module.exports = Subject;