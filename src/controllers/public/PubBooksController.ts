import BookRepository from "../../repositories/BookRepository"

const PubBooksController = {

    allBooks: () => {
        return BookRepository.getAllBooks()
    },

    showBook: (id: Number) => {
        return BookRepository.getBook(id)
    },
}

export default PubBooksController