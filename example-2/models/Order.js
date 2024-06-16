const sequelize = require('../index');
const { DataTypes } = require('sequelize');

const Order = sequelize.define('orders', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    user_id: {
        references: {
            model: "users",
            key: "id"
        },
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'delivering', 'cancelled'),
        allowNull: false
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
}, {
    timestamps: true
});

module.exports = Order;