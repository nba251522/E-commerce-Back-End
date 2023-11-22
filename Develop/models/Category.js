const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Category extends Model {}

  Category.init({
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize, // Pass the sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  });

  return Category;
};