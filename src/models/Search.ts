import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class Search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Search.init({
    userId: DataTypes.INTEGER,
    searchText: DataTypes.STRING,
    searchOptions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Search',
  });
  return Search;
};