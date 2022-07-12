import BookRepository from "../../repositories/BookRepository"
import PubBooksController from "../public/PubBooksController"

const MyBooksController = {

    ...PubBooksController,

    createBook: async (data: any) => {
        return BookRepository.createBook(data)
    },

    updateBook: (bookId: Number, data: any) => {
        
    },

    deleteBook: (bookId: Number, data: any) => {
        
    },
}

export default MyBooksController