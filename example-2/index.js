const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
});

module.exports = sequelize;


const ProductModal = require('./models/Product');
const UserModal = require('./models/User');
const CategoryModal = require('./models/Category');
const OrderModal = require('./models/Order');
const OrderItemModal = require('./models/OrderItem');
const ReviewModal = require('./models/Reviews');
require('./models/Relations');


(async () => {
    await sequelize.sync({ force: true });

    const joe = await UserModal.create({
        name: "Joe",
        email: "joe@gmail.com",
        password: "123456",
        address: "Cairo"
    });

    console

    console.log("User", joe.toJSON());

    const electronicsCategory = await CategoryModal.create({
        name: "Electronics",
        description: "Electronic devices"
    });

    console.log("Category", electronicsCategory.toJSON());

    const phone = await ProductModal.create({
        name: "Phone",
        description: "Smart phone",
        price: 1000,
        stock: 10,
        category_id: electronicsCategory.id
    });

    console.log("Product", phone.toJSON());

    const order = await OrderModal.create({
        user_id: joe.id,
        status: "pending",
        total_amount: phone.price * 2
    });

    console.log("Order", order.toJSON());

    const orderItem = await OrderItemModal.create({
        order_id: order.id,
        product_id: phone.id,
        quantity: 2,
        price: phone.price
    });

    console.log("OrderItem", orderItem.toJSON());

    const review = await ReviewModal.create({
        user_id: joe.id,
        product_id: phone.id,
        rating: 5,
        comment: "Good product"
    });
   
    console.log("Review", review.toJSON());

})();

