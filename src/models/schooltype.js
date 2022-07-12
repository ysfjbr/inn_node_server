'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SchoolType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SchoolType.init({
    code: DataTypes.STRING,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SchoolType',
  });
  return SchoolType;
};