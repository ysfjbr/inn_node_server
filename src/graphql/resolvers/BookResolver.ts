// import BooksController from "../controllers/BooksController";

import MyBooksController from "../../controllers/me/MyBooksController";
import PubBooksController from "../../controllers/public/PubBooksController";
import { IBook, IBookRequest } from "../../models/Book";

export default {
    Query: {
        allBooks: (parent: any, args:any, {models}:any) => PubBooksController.allBooks(),
        getBook: (parent: any, {id}:any, {models}:any) => PubBooksController.showBook(id),
    },

    Mutation: {
        createBook: (parent: any, args:IBookRequest, context:any) => MyBooksController.createBook(args, context),
        updateBook: (parent: any, args:any, {models}:any) => models.book.update(args),
        deleteBook: (parent: any, args:any, {models}:any) => models.book.destroy({where: args})
    }
}