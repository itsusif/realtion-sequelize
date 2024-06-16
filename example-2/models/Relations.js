const Category = require("./Category");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Product = require("./Product");
const Review = require("./Reviews");
const User = require("./User");

// One-to-Many relationship between Category and Product (One Category has many Products)
Category.hasMany(Product, {
    foreignKey: "category_id"
});

Product.belongsTo(Category, {
    foreignKey: "category_id"
});


// One-to-Many relationship between User and Order (One User has many Orders)
User.hasMany(Order, {
    foreignKey: "user_id"
});

Order.belongsTo(User, {
    foreignKey: "user_id"
});

// One-to-Many relationship between Order and OrderItem (One Order has many OrderItems)
Order.hasMany(OrderItem, {
    foreignKey: "order_id"
});

OrderItem.belongsTo(Order, {
    foreignKey: "order_id"
});

// One-to-Many relationship between Product and OrderItem (One Product has many OrderItems)
Product.hasMany(OrderItem, {
    foreignKey: "product_id"
});

OrderItem.belongsTo(Product, {
    foreignKey: "product_id"
});

// One-to-Many relationship between User and Review (One User has many Reviews)
User.hasMany(Review, {
    foreignKey: "user_id"
});

Review.belongsTo(User, {
    foreignKey: "user_id"
});

// One-to-Many relationship between Product and Review (One Product has many Reviews)
Product.hasMany(Review, {
    foreignKey: "product_id"
});

Review.belongsTo(Product, {
    foreignKey: "product_id"
});