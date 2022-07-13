import PagesController from "../../controllers/PagesController";

export default {    
    Query: {
        allPages: (parent: any, args:any, {models}:any) => models.page.findAll(),
        getPage: (parent: any, {title}:any, {models}:any) => models.page.findOne({where: {
            title
        }}),
    },

    Mutation: {
        createPage: (parent: any, args:any, {models}:any) => PagesController.createPage(args),
        updatePage: (parent: any, args:any, {models}:any) => models.page.update(args),
        deletePage: (parent: any, args:any, {models}:any) => models.page.destroy({where: args}),
        uploadFile: (parent: any, args:any, {models}:any) => PagesController.uploadFile(parent, args),
    }
}