var jwt = require('jsonwebtoken');
// import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../auth/MyContext";

export const isAuth = ({context}:any , next:any)=> {
    const auth:any = context.req.headers["authorization"];

    if(!auth)  
        throw new Error('not authenticated')

    try {
        const token:string = auth.split(" ")[1]
        const payload = jwt.verify(token, process.env.SECRET_ACC_JWT)
        context.payload = payload as any
    } catch (error) {
        throw new Error('Token is invalid')
    }
    return next()
}

export const getAuthUserId = (token: string)=> {

    if(!token)  
        return null

    try {
        const payload = jwt.verify(token, process.env.SECRET_ACC_JWT)
        return payload?.userId
        
    } catch (error) {
        console.log("error", error, process.env.SECRET_ACC_JWT);
        // throw new Error('Token is invalid')
    }

    return null
}