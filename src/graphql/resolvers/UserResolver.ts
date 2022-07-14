import UserController from "../../controllers/public/UserController";

export default {
    Query: {
        allUsers: (parent: any, args:any, {models}:any) => models.user.findAll(),
        getUser: (parent: any, {username}:any, {models}:any) => models.user.findOne({where: {
            username
        }}),
        currentUser: (parent: any, args:any, context:any) => UserController.currentUser(context)
    },

    Mutation: {
        login: (parent: any, {username, password}:any, {models}:any) => UserController.login(models, username, password),
        createUser: (parent: any, args:any, {models}:any) => models.user.create(args),
        updateUser: (parent: any, args:any, {models}:any) => models.user.update(args),
        deleteUser: (parent: any, args:any, {models}:any) => models.user.destroy({where: args})
    }
}