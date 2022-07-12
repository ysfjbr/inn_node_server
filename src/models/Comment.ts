import  {Model} from 'sequelize';

module.exports = (sequelize:any, DataTypes:any) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  }
  Comment.init({
    userId: DataTypes.INTEGER,
    commentText: DataTypes.STRING,
    ObjectType: DataTypes.STRING,
    ObjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};