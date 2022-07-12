import { Model } from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  Like.init({
    userId: DataTypes.INTEGER,
    ObjectType: DataTypes.STRING,
    ObjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};