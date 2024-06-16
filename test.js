const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./example-1/database.sqlite"
});


const User = sequelize.define(
    'user',
    {
        username: DataTypes.STRING,
        points: DataTypes.INTEGER,
    },
    { timestamps: false },
);
const Profile = sequelize.define(
    'profile',
    {
        name: DataTypes.STRING,
    },
    { timestamps: false },
);

const User_Profile = sequelize.define(
    'User_Profile',
    {
        selfGranted: DataTypes.BOOLEAN,
    },
    { timestamps: false },
);
User.belongsToMany(Profile, { through: User_Profile });
Profile.belongsToMany(User, { through: User_Profile });

(async () => {
    await sequelize.sync({ force: true })
    const amidala = await User.create({ username: 'p4dm3', points: 1000 });
    const queen = await Profile.create({ name: 'Queen' });
    console.log(amidala);
    await queen.addUser(amidala, {
        through: {
            selfGranted: true
        }
    })
    await amidala.addProfile(queen, { through: { selfGranted: false } });
    const p = await amidala.getProfiles();
    console.log(p[0].dataValues)
    const result = await User.findOne({
        where: { username: 'p4dm3' },
        include: Profile,
    });
    const profile = await Profile.findOne({
        where: {
            name: "Queen"
        },
        include: User
    })
    console.log(profile.toJSON())
    console.log(result.toJSON());
})()