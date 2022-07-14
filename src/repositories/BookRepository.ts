import models from "../models"
import { IBook, IBookRequest, IBookRespose } from "../models/Book"
import SubjectRepository from "./SubjectRepository"

const BookRepository = {

    getAllBooks: async () => {
        let books: IBookRespose[] = (await models.book.findAll()).map(mapDataBookResponse)
        return books
    },

    getBook: async (id: Number) => {
        let book: any = await models.book.findOne({
            where: {
                id
            }
        })
        if(!book) throw new Error("Book Not Found!");

        return mapDataBookResponse(book)
    },

    createBook: async (req: IBookRequest, context: any) => {

        let classId = 0
        let languageId = 0
        let userId = context.authUserId
        let subjectId = (await SubjectRepository.findOrCreateSubject(req.subject)).id
        let schoolId = 0

        let newBook: IBook = {
            title: req.title, 
            description: req.description,
            classId,
            languageId,
            pages: 0,
            userId,
            subjectId,
            schoolId
        }

        let book = await models.book.create(newBook)
        
        return mapDataBookResponse(book.dataValues)
    },

    updatePages: async (bookId: Number) => {
        let pages: IBook[] = await models.page.findAll({ where: { bookId } })

        models.book.update(
            { pages: pages.length },
            { where: { id: bookId } }
        )
    }
}

async function mapDataBookResponse(book: IBook) : Promise<IBookRespose> {
    let mappedBook : IBookRespose = book
    
    if (!mappedBook.image) {
        let pages = await models.page.findAll({ where: { bookId: book.id }})
        mappedBook.image = pages.length > 0 ? pages[0].content : null
    }

    mappedBook.subject = await models.Subject.findOne({where: { id: book.subjectId }})

    mappedBook.school = await models.School.findOne({where: { id: book.schoolId }})

    mappedBook.creator = await models.user.findOne({where: { id: book.userId }})
    
    mappedBook.allPages = await models.page.findAll({ where: { bookId: book.id } })
    
    return mappedBook
}

export default BookRepository