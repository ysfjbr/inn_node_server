import BookRepository from "../../repositories/BookRepository"
import PubBooksController from "../public/PubBooksController"

const AdminBooksController = {
    ...PubBooksController,
    createBook: (data: any) => {
        return BookRepository.createBook(data)
    },

    updateBook: (bookId: Number, data: any) => {
        
    },

    deleteBook: (bookId: Number, data: any) => {
        
    },

}

export default AdminBooksController