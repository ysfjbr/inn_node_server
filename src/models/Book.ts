import  {Model} from 'sequelize';
module.exports = (sequelize:any, DataTypes:any) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // book.hasMany(models.page, { foreignKey: "bookId" });
    }
  }
  book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    pages: DataTypes.NUMBER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};