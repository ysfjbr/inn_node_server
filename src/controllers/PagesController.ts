import BooksController from "./BooksController"
import models from "../models"
import Stream, { finished } from "stream"
import { join, parse } from "path"


const PagesController = {

    createPage: async ({ content, bookId }: any) => {
        const page = models.Page.create({ content, bookId })
        BooksController.updatePages(bookId)
        return page
    },

    uploadFile: async (parent:any, { file }:any) => {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const stream = createReadStream();

        let { ext, name} = parse(filename)

        name = name.replace(/([^a-z0-9 ]+)/gi, '-').replace(' ','-')
        let serverFile = join(__dirname, `../upload/${name}${ext}`)
        
        const out = require('fs').createWriteStream(serverFile);
        stream.pipe(out);

        await Stream.promises.finished(out);

        return { serverFile, mimetype, encoding };
    }
}

export default PagesController;