import BooksController from "../controllers/BooksController";

export default {
    Query: {
        allBooks: (parent: any, args:any, {models}:any) => models.Book.findAll(),
        getBook: (parent: any, {title}:any, {models}:any) => models.Book.findOne({where: {
            title
        }}),
    },

    Mutation: {
        createBook: (parent: any, args:any, {models}:any) => BooksController.createBook(args),
        updateBook: (parent: any, args:any, {models}:any) => models.Book.update(args),
        deleteBook: (parent: any, args:any, {models}:any) => models.Book.destroy({where: args})
    }
}