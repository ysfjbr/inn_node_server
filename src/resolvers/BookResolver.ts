import BooksController from "../controllers/BooksController";

export default {
    Query: {
        allBooks: (parent: any, args:any, {models}:any) => models.book.findAll(),
        getBook: (parent: any, {id}:any, {models}:any) => BooksController.getBook(id),
    },

    Mutation: {
        createBook: (parent: any, args:any, {models}:any) => BooksController.createBook(args),
        updateBook: (parent: any, args:any, {models}:any) => models.book.update(args),
        deleteBook: (parent: any, args:any, {models}:any) => models.book.destroy({where: args})
    }
}