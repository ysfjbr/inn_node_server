import { DataTypes, Model } from 'sequelize';

export const BookModel =  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pages: DataTypes.BIGINT,
}

const getBook = (conn: any) => {
  class Book extends Model {}

  Book.init(BookModel, {
      sequelize: conn,
      modelName: 'Book' 
  });

  return Book
}

export default getBook