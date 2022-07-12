import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class SchoolLevel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  SchoolLevel.init({
    code: DataTypes.STRING,
    label: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SchoolLevel',
  });
  return SchoolLevel;
};