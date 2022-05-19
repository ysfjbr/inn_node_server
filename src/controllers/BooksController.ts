import models from "../models"

const BooksController = {

    createBook : async ({content, bookId}: any) => {

    },
    
    updatePages : async (bookId: Number) => {
        let pages =  await models.Page.findAll({where: { bookId }})
    
        models.Book.update(
            { pages: pages.length },
            { where: { id: bookId } }
        )
    }

}

export default BooksController