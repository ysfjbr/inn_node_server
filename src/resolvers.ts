export default {
    Query: {
        allUsers: (parent: any, args:any, {models}:any) => models.User.findAll(),
        getUser: (parent: any, {username}:any, {models}:any) => models.User.fineOne({where: {
            username
        }}),
    },

    Mutation: {
        createUser: (parent: any, args:any, {models}:any) => models.User.create(args),
        updateUser: (parent: any, args:any, {models}:any) => models.User.update(args),
        deleteUser: (parent: any, args:any, {models}:any) => models.User.destroy({where: args})
    }
}