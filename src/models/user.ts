const { DataTypes } = require('sequelize');

const User =  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
}

export default User