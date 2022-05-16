const { Sequelize } = require("sequelize");

const sequelize: any = new Sequelize(process.env.DATABASE_URL) 

export async function testConn() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
  
  

