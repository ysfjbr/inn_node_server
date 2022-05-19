const { Sequelize } = require('sequelize');

import getUser from "./User";
import getBook from "./Book";
import getPage from "./Page";

export const conn: any = new Sequelize(process.env.DATABASE_URL)

const db = {
    User: getUser(conn),
    Book: getBook(conn),
    Page: getPage(conn),
}

export async function testConn() {
    try {
        await conn.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default db;