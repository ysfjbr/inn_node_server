import { DataTypes, Model } from 'sequelize';

export const UserModel =  {
    // id: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tokenVersion: DataTypes.STRING,
}

const getUser = (conn: any) => {
  class User extends Model {}

  User.init(UserModel, {
    sequelize: conn,
    modelName: 'User' 
  });

  return User
}


export default getUser