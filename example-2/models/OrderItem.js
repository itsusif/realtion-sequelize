const sequelize = require('../index');
const { DataTypes } = require('sequelize');

const OrderItem = sequelize.define('orderItem', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    order_id: {
        references: {
            model: "orders",
            key: "id"
        },
        type: DataTypes.INTEGER,
    },
    product_id: {
        references: {
            model: "products",
            key: "id"
        },
        type: DataTypes.INTEGER,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = OrderItem;