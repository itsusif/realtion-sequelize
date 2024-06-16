const sequelize = require('../index');
const { DataTypes } = require('sequelize');

const Review = sequelize.define('reviews', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    product_id: {
        references: {
            model: "products",
            key: "id"
        },
        type: DataTypes.INTEGER,
    },
    user_id: {
        references: {
            model: "users",
            key: "id"
        },
        type: DataTypes.INTEGER,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = Review;