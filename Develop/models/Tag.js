const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Tag extends Model {}

  Tag.init({
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize, // Pass the sequelize instance
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  });

  return Tag;
};