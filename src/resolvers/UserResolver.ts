import { createRefreshToken } from "../auth/auth";

export default {
    Query: {
        allUsers: (parent: any, args:any, {models}:any) => models.User.findAll(),
        getUser: (parent: any, {username}:any, {models}:any) => models.User.findOne({where: {
            username
        }}),
    },

    Mutation: {
        login: (parent: any, {username, password}:any, {models}:any) => login(models, username, password),
        createUser: (parent: any, args:any, {models}:any) => models.User.create(args),
        updateUser: (parent: any, args:any, {models}:any) => models.User.update(args),
        deleteUser: (parent: any, args:any, {models}:any) => models.User.destroy({where: args})
    }
}

const login = (models:any, username:string, password :string) => {
    const user = models.User.findOne({where: {username , password }})

        if(!user)
            throw new Error("Invalid login! no user");

        // const valid = await compare(password, user.password)
        
        // if(!valid)
        //     throw new Error("Invalid login! pass error");

        // res.cookie('jid', createRefreshToken(user), 
        //     {
        //         httpOnly:true
        //     }
        // )

        

        return {
            token : createRefreshToken(user),
            user
        }
}