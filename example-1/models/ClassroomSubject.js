const sequelize = require('../index');
const Subject = require('./Subject');
const Classroom = require('./Classroom');

const ClassroomSubject = sequelize.define('classroom_subject', {}, {
    timestamps: false
});

Subject.belongsToMany(Classroom, {
    through: ClassroomSubject
});
Classroom.belongsToMany(Subject, {
    through: ClassroomSubject
})

module.exports = ClassroomSubject;