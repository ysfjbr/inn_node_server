// import BooksController from "../controllers/BooksController";

import AdminBooksController from "../controllers/admin/PubBooksController";
import PubBooksController from "../controllers/public/PubBooksController";
import { IBook } from "../models/Book";

export default {
    Query: {
        allBooks: (parent: any, args:any, {models}:any) => PubBooksController.allBooks(),
        getBook: (parent: any, {id}:any, {models}:any) => PubBooksController.showBook(id),
    },

    Mutation: {
        createBook: (parent: any, args:IBook, {models}:any) => AdminBooksController.createBook(args),
        updateBook: (parent: any, args:any, {models}:any) => models.book.update(args),
        deleteBook: (parent: any, args:any, {models}:any) => models.book.destroy({where: args})
    }
}