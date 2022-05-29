import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      page.belongsTo(models.book, { foreignKey: "bookId" });
    }
  }
  page.init({
    content: DataTypes.STRING,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'page',
  });
  return page;
};