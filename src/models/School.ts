import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  School.init({
    userId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    label: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    schoolTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'School',
  });
  return School;
};