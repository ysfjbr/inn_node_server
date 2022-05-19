import { DataTypes, Model } from 'sequelize';
import models from "."

export const BookModel =  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pages: DataTypes.BIGINT,
}

const getBook = (conn: any) => {
  class Book extends Model {
    static associate() {
      Book.hasMany(models.Page, { foreignKey: "bookId" });
    }
  }

  Book.init(BookModel, {
      sequelize: conn,
      modelName: 'Book' 
  });

  return Book
}

export default getBook