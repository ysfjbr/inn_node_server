'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SchoolLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SchoolLevel.init({
    code: DataTypes.NUMBER,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SchoolLevel',
  });
  return SchoolLevel;
};