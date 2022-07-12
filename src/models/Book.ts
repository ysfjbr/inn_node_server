import  {Model} from 'sequelize';
import { IUser } from './User';
module.exports = (sequelize:any, DataTypes:any) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // book.hasMany(models.page, { foreignKey: "bookId" });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pages: DataTypes.NUMBER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return Book;
};

export interface IBook {
  id: number;
  title: string;
  description: string;
  pages: number;
  image: string;
  creator: IUser;
  createdAt: Date;
  updatedAt: Date;
}