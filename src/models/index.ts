
import UserModel from "./user";

const { Sequelize, DataTypes, Model } = require('sequelize');

export const sequelize: any = new Sequelize(process.env.DATABASE_URL)

class User extends Model {}

User.init(UserModel, {
  sequelize,
  modelName: 'User' 
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true


const db = {
    User
}

export async function testConn() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default db;