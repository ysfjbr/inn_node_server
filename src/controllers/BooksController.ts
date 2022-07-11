import models from "../models"

const BooksController = {

    getAllBooks: async () => {
        let books: any = (await models.book.findAll()).map(async (book: any) => {
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
        book['allPages'] = await models.page.findAll({ where: { bookId: id } })

        return book
    },

    createBook: async (args: any) => {
        return models.book.create(args)
    },

    updatePages: async (bookId: Number) => {
        let pages = await models.page.findAll({ where: { bookId } })

        models.book.update(
            { pages: pages.length },
            { where: { id: bookId } }
        )
    }
}

export default BooksController