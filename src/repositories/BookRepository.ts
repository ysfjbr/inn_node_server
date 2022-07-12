import models from "../models"
import { IBook } from "../models/Book"

const BookRepository = {

    getAllBooks: async () => {
        let books: IBook[] = (await models.book.findAll()).map(async (book: IBook) => {
            if (!book['image']) {
                let pages = await models.page.findAll({ where: { bookId: book.id }})
                book['image'] = pages.length > 0 ? pages[0].content : null
            }
            return book
        })
        return books
    },

    getBook: async (id: Number) => {
        let book: any = await models.book.findOne({
            where: {
                id
            }
        })
        if(!book) throw new Error("Book Not Found!");
        
        book['allPages'] = await models.page.findAll({ where: { bookId: id } })

        return book
    },

    createBook: async (args: IBook) => {
        args.pages = 0;
        return models.book.create(args)
    },

    updatePages: async (bookId: Number) => {
        let pages: IBook[] = await models.page.findAll({ where: { bookId } })

        models.book.update(
            { pages: pages.length },
            { where: { id: bookId } }
        )
    }
}

export default BookRepository