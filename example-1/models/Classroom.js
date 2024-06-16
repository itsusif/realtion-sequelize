const sequelize = require('../index');
const School = require('./School');
const { DataTypes } = require('sequelize');

const Classroom = sequelize.define('classroom', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    schoolId: {
        type: DataTypes.INTEGER,
        references: {
            mode: School,
            key: 'id'
        }
    }
});

// One-to-Many relationship between School and Classroom
School.hasMany(Classroom, {
    foreignKey: 'schoolId'
});
Classroom.belongsTo(School, {
    foreignKey: 'schoolId'
});

module.exports = Classroom;