
export const MyBookPermissions = {
    create : (context: any) : boolean => {
        if(!context.authUserId) throw new Error("You must login!");

        return true
    }
}