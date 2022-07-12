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
    pages: DataTypes.INTEGER,
    image: DataTypes.STRING,
    userId:DataTypes.INTEGER,
    schoolId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    countryId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER,
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
  userId:number,
  schoolId: number,
  subjectId: number,
  classId: number,
  countryId: number,
  languageId: number,
  createdAt: Date;
  updatedAt: Date;
}