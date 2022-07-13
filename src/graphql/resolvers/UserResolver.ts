import { Op } from 'sequelize';
import { createRefreshToken } from "../../auth/auth";
// const sequelize = require('sequelize');

export default {
    Query: {
        allUsers: (parent: any, args:any, {models}:any) => models.user.findAll(),
        getUser: (parent: any, {username}:any, {models}:any) => models.user.findOne({where: {
            username
        }}),
    },

    Mutation: {
        login: (parent: any, {username, password}:any, {models}:any) => login(models, username, password),
        createUser: (parent: any, args:any, {models}:any) => models.user.create(args),
        updateUser: (parent: any, args:any, {models}:any) => models.user.update(args),
        deleteUser: (parent: any, args:any, {models}:any) => models.user.destroy({where: args})
    }
}

const login = (models:any, username:string, password :string) => {
    const user = models.user.findOne({where: {username: {[Op.like]: '%' + username.toLowerCase() + '%'}  , password }})

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