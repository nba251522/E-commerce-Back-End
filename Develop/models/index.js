const Sequelize = require('sequelize');
const config = require('../config/config'); // Adjust the path as necessary

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  // other Sequelize options if needed
});

const Product = require('./Product')(sequelize);
const Category = require('./Category')(sequelize);
const Tag = require('./Tag')(sequelize);
const ProductTag = require('./ProductTag')(sequelize);

// Define model relationships
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

module.exports = {
  sequelize,
  Product,
  Category,
  Tag,
  ProductTag,
};