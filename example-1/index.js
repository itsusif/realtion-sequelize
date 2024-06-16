const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./example-1/database.sqlite"
});

module.exports = sequelize;


const SchoolModel = require('./models/School');
const ClassroomModel = require('./models/Classroom');
const StudentModel = require('./models/Student');
const SubjectModal = require('./models/Subject');
require('./models/ClassroomSubject');

(async () => {
    await sequelize.sync({ force: true });

    const school = await SchoolModel.create({
        name: "MKS"
    });

    console.log("School", school.toJSON());

    const classroom = await ClassroomModel.create({
        name: "Senior 1 Class B",
        schoolId: school.id
    });

    console.log("Classroom", classroom.toJSON());

    const subject = await SubjectModal.create({
        name: "Math"
    });

    await classroom.addSubject(subject);

    const student = await StudentModel.create({
        name: "Youssef nageeb hashad",
        age: 15,
        classroomId: classroom.id
    });

    console.log("Student", student.toJSON());


    const getSchool = await SchoolModel.findOne({
        where: {
            name: "MKS"
        },
        include: ClassroomModel
    });

    const getClassroom = await ClassroomModel.findOne({
        where: {
            id: 1
        },
        include: [StudentModel, SubjectModal]
    });

    const students = await StudentModel.findAll({
        include: ClassroomModel
    })

    console.log('SchoolData', getSchool.toJSON())
    console.log('ClassData', getClassroom.toJSON())
    console.log('Students', students.map((a) => a.dataValues))
})();

