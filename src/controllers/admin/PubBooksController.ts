import { IBookRequest } from "../../models/Book"
import BookRepository from "../../repositories/BookRepository"
import PubBooksController from "../public/PubBooksController"

const AdminBooksController = {
    ...PubBooksController,
    createBook: (data: IBookRequest) => {
        return BookRepository.createBook(data)
    },

    updateBook: (bookId: Number, data: any) => {
        
    },

    deleteBook: (bookId: Number, data: any) => {
        
    },

}

export default AdminBooksController