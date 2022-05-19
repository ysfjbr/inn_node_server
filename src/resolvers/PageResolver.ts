
export default {
    Query: {
        allPages: (parent: any, args:any, {models}:any) => models.Page.findAll(),
        getPage: (parent: any, {title}:any, {models}:any) => models.Page.findOne({where: {
            title
        }}),
    },

    Mutation: {
        createPage: (parent: any, args:any, {models}:any) => models.Page.create(args),
        updatePage: (parent: any, args:any, {models}:any) => models.Page.update(args),
        deletePage: (parent: any, args:any, {models}:any) => models.Page.destroy({where: args})
    }
}