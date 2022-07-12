import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class BookCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  BookCategory.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookCategory',
  });
  return BookCategory;
};