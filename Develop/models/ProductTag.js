const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class ProductTag extends Model {}

  ProductTag.init({
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // This reference should match the model name defined in Product.js
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // This reference should match the model name defined in Tag.js
        key: 'id'
      }
    }
  }, {
    sequelize, // Pass the sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  });

  return ProductTag;
};