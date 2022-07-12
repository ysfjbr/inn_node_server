'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  School.init({
    code: DataTypes.STRING,
    label: DataTypes.STRING,
    countryId: DataTypes.NUMBER,
    schoolTypeId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};