import  {Model} from 'sequelize';
import { IBook } from './Book';

module.exports = (sequelize:any, DataTypes:any) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      Page.belongsTo(models.book, { foreignKey: "bookId" });
    }
  }
  Page.init({
    content: DataTypes.STRING,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'page',
  });
  return Page;
};

export interface IPage {
  id: number;
  content: string;
  book: IBook;
  bookId: number;
  createdAt: Date;
  updatedAt: Date;
}