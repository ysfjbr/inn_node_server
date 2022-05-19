import BooksController from "./BooksController"
import models from "../models"

const PagesController = {

    createPage: async ({ content, bookId }: any) => {
        const page = models.Page.create({ content, bookId })
        BooksController.updatePages(bookId)
        return page
    }
}

export default PagesController;