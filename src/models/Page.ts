import { DataTypes, Model } from 'sequelize';
import models from "."

export const PageModel =  {
    content: DataTypes.STRING,
    bookId: DataTypes.INTEGER
}

const getPage = (conn: any) => {
  class Page extends Model {
    static associate() {
      Page.belongsTo(models.Book, { foreignKey: "bookId" });
    }
  }

  Page.init(PageModel, {
      sequelize: conn,
      modelName: 'Page' 
  });

  return Page
}

export default getPage