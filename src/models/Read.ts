import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class Read extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Read.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    pagenumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Read',
  });
  return Read;
};