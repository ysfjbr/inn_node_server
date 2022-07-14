import models from "../models";
import { IUser, UserModel } from "../models/User";
import { sendRefreshToken } from "./sendRefreshToken";

var jwt = require('jsonwebtoken');
// import { User } from "../entity/User";
// import { sendRefreshToken } from "./sendRefreshToken";

export function createAccessToken(user: IUser) {
    return jwt.sign({ userId: user.id }, process.env.SECRET_ACC_JWT, { expiresIn: "10m" })
}

export function createRefreshToken(user: IUser) {
    return jwt.sign({ userId: user.username, tokenVersion: user.tokenVersion },
        process.env.SECRET_REF_JWT, { expiresIn: "7d" })
}

export const createRefreshTokenPOST = async (req: any, res: any) => {
    const token = req.cookies?.jid
    if(!token) {
        return res.send({ ok : false, accessToken : ''})
    }

    let payload:any = null
    try {
        payload = jwt.verify(token, process.env.SECRET_REF_JWT)
    } catch (error) {
        console.log(error);                
        return res.send({ ok : false, accessToken : ''}) 
    }

    // const user: any = await models.User.findOne(payload.username)

    // if(!user)
    //     return res.send({ ok : false, accessToken : ''})

    // if(payload.tokenVersion !== user.tokenVersion)
    //     return res.send({ ok : false, accessToken : ''})

    // sendRefreshToken(res, createRefreshToken(user))
    
    // return res.send({ ok : true, accessToken : createAccessToken(user)})
    
    // // var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    return res.send({ ok : true, accessToken : token})
}