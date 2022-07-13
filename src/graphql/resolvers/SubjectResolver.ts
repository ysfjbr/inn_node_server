// import BooksController from "../controllers/BooksController";

import PubSubjectsController from "../../controllers/public/PubSubjectsController";

export default {
    Query: {
        getAllSubjects: (parent: any, args:any, {models}:any) => PubSubjectsController.getAllSubjects(),
        getSubject: (parent: any, {code}:any, {models}:any) => PubSubjectsController.getSubject(code),
    },

    Mutation: {
        // createBook: (parent: any, args:IBook, {models}:any) => AdminBooksController.createBook(args),
        // updateBook: (parent: any, args:any, {models}:any) => models.book.update(args),
        // deleteBook: (parent: any, args:any, {models}:any) => models.book.destroy({where: args})
    }
}