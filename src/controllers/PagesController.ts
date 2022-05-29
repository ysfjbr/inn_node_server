import BooksController from "./BooksController"
import models from "../models"
import Stream, { finished } from "stream"
import { join, parse } from "path"


const PagesController = {

    createPage: async ({ content, bookId }: any) => {
        const page = models.page.create({ content, bookId })
        BooksController.updatePages(bookId)
        return page
    },

    uploadFile: async (parent:any, { file, bookId }:any) => {
        const { createReadStream, filename, mimetype, encoding } = await file;
        const stream = createReadStream();

        let { ext, name} = parse(filename)

        name = name.replace(/([^a-z0-9 ]+)/gi, '-').replace(' ','-')

        let newfilename = name + ext;
        let serverFile = join(__dirname, `../upload/${newfilename}`)
        
        const out = require('fs').createWriteStream(serverFile);
        stream.pipe(out);

        await Stream.promises.finished(out);

        console.log('newfilename',newfilename);
        
        await PagesController.createPage({ content: newfilename, bookId })
        // return { serverFile, mimetype, encoding };

        return { status: "OK!" }
    }
}

export default PagesController;