import { DataTypes, Model } from 'sequelize';

export const PageModel =  {
    content: DataTypes.STRING,
}

const getPage = (conn: any) => {
  class Page extends Model {}

  Page.init(PageModel, {
      sequelize: conn,
      modelName: 'Page' 
  });

  return Page
}

export default getPage