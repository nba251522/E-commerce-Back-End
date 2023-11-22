const { sequelize, Category, Product, Tag, ProductTag } = require('../models');


const categoryData = [
    { category_name: 'Computers' },
    { category_name: 'Smartphones' },
    { category_name: 'Audio' },
    { category_name: 'Wearables' },
];

const productData = [
    {
        product_name: 'Gaming Laptop',
        price: 1500.00,
        stock: 10,
        category_id: 1, 
    },
    {
        product_name: 'Bluetooth Headphones',
        price: 199.99,
        stock: 25,
        category_id: 3, 
    },
    {
        product_name: 'Smartwatch',
        price: 299.99,
        stock: 15,
        category_id: 4, 
    },
    {
        product_name: 'Flagship Smartphone',
        price: 999.99,
        stock: 20,
        category_id: 2,
    },
];

const tagData = [
    { tag_name: 'Bestseller' },
    { tag_name: 'New Arrival' },
    { tag_name: 'Discount' },
    { tag_name: 'Limited Edition' },
];

const productTagData = [
    {
        product_id: 1, // Gaming Laptop
        tag_id: 1,     // Bestseller
    },
    {
        product_id: 2, // Bluetooth Headphones
        tag_id: 3,     // Discount
    },
    {
        product_id: 3, // Smartwatch
        tag_id: 2,     // New Arrival
    },
    {
        product_id: 4, // Flagship Smartphone
        tag_id: 4,     // Limited Edition
    },
    // Add more product tags as needed
];

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        await Category.bulkCreate(categoryData);
        await Product.bulkCreate(productData);
        await Tag.bulkCreate(tagData);
        await ProductTag.bulkCreate(productTagData);

        console.log('Seeding successful!');
    } catch (error) {
        console.error('Seeding failed:', error);
    } finally {
        process.exit(0);
    }
};

seedDatabase();