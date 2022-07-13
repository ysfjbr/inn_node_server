// import BooksController from "../controllers/BooksController";

import PubCountriesController from "../../controllers/public/PubCountriesController";

export default {
    Query: {
        allCountries: (parent: any, args:any, {models}:any) => PubCountriesController.getAllCountries(),
        getCountry: (parent: any, {code}:any, {models}:any) => PubCountriesController.getCountry(code),
    },

    Mutation: {
        // createBook: (parent: any, args:IBook, {models}:any) => AdminBooksController.createBook(args),
        // updateBook: (parent: any, args:any, {models}:any) => models.book.update(args),
        // deleteBook: (parent: any, args:any, {models}:any) => models.book.destroy({where: args})
    }
}