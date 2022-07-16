import { Op } from 'sequelize';
import { IUser } from '../../models/User';
import { createAccessToken } from "../../auth/auth";
import MyBooksController from '../me/MyBooksController';


const UserController = {
    login : async (models:any, username:string, password :string) => {
        const user = await models.user.findOne({where: {username: {[Op.like]: '%' + username.toLowerCase() + '%'}  , password }})
    
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
            
            return await mapDataUserResponse(user)
    },
    currentUser : async (context: any) => {
        const user = await context.models.user.findOne({where: {id: context.authUserId}})
    
        if(!user)
            throw new Error("Invalid login! no user");
        
        return await mapDataUserResponse(user)
    },
}

async function mapDataUserResponse(user: IUser){
    return {
        token : createAccessToken(user),
        user,
        myBooks: await MyBooksController.myBooks(user.id)
    }
}

export default UserController