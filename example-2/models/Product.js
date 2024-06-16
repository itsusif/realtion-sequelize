const sequelize = require('../index');
const { DataTypes } = require('sequelize');
const Category = require('./Category');

const Product = sequelize.define('product', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        references: {
            model: 'categories',
            key: 'id'
        },
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: true
});

module.exports = Product;