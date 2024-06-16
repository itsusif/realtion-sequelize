const sequelize = require('../index');
const Classroom = require('./Classroom');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('student', {
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    classroomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Classroom,
            key: 'id'
        }
    }
});

// One-to-Many relationship between Classroom and Student
Classroom.hasMany(Student, {
    foreignKey: 'classroomId'
});
Student.belongsTo(Classroom, {
    foreignKey: 'classroomId'
});

module.exports = Student;