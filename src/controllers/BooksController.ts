import models from "../models"

const BooksController = {

    getBook: async (id: Number) => {
        let book:any = await models.book.findOne({where: {
            id
        }})
        book['allPages'] = await models.page.findAll({where: { bookId: id}})

        return book
    },

    createBook : async (args: any) => {
        return models.book.create(args)    
    },
    
    updatePages : async (bookId: Number) => {
        let pages =  await models.page.findAll({where: { bookId }})
    
        models.book.update(
            { pages: pages.length },
            { where: { id: bookId } }
        )
    }
}

export default BooksController