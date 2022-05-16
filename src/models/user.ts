export default (sequelize:any , DataType:any)=> {
    const User = sequelize.define('User', {
        username: DataType.STRING,
        password: DataType.STRING,
    })

    return User;
}