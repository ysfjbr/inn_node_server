import { DataTypes } from 'sequelize';
import  {Model} from 'sequelize';

export const UserModel = {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  fullname: DataTypes.STRING,
  email: DataTypes.STRING,
  tokenVersion: DataTypes.STRING
}

module.exports = (sequelize:any, DataTypes:any) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  user.init( UserModel , {
    sequelize,
    modelName: 'user',
  });
  return user;
};