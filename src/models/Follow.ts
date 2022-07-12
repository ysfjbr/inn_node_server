import { Model } from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class Follow extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  Follow.init({
    followerId: DataTypes.INTEGER,
    followedId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Follow',
  });
  return Follow;
};