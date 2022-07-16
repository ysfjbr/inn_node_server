import BookRepository from "../../repositories/BookRepository"
import { MyBookPermissions } from "../permissions/my/books"
import PubBooksController from "../public/PubBooksController"

const MyBooksController = {

    ...PubBooksController,

    myBooks: (userId: number) => {
        return BookRepository.getUserBooks(userId)
    },

    createBook: async (data: any, context: any) => {
        if(MyBookPermissions.create(context))
        return BookRepository.createBook(data, context)
    },

    updateBook: (bookId: Number, data: any) => {
        
    },

    deleteBook: (bookId: Number, data: any) => {
        
    },
}

export default MyBooksController