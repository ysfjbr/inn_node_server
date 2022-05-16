
import User from "./user";

const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize: any = new Sequelize(process.env.DATABASE_URL)


const db = {
    User: User(sequelize, DataTypes)
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