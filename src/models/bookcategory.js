'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookCategory.init({
    userId: DataTypes.NUMBER,
    bookId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'BookCategory',
  });
  return BookCategory;
};