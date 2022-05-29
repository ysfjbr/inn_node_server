import BooksController from "./BooksController"
import models from "../models"
import Stream, { finished } from "stream"


const PagesController = {

    createPage: async ({ content, bookId }: any) => {
        const page = models.Page.create({ content, bookId })
        BooksController.updatePages(bookId)
        return page
    },

    uploadFile: async (parent:any, { file }:any) => {
        const { createReadStream, filename, mimetype, encoding } = await file;

      // Invoking the `createReadStream` will return a Readable Stream.
      // See https://nodejs.org/api/stream.html#stream_readable_streams
      const stream = createReadStream();

      // This is purely for demonstration purposes and will overwrite the
      // local-file-output.txt in the current working directory on EACH upload.
      const out = require('fs').createWriteStream('local-file-output.txt');
      stream.pipe(out);

      return "OK!";
      //await Stream.promises.finished(out);


    //   return { filename, mimetype, encoding };

    }
}

export default PagesController;