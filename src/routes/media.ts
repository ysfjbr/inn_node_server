import  { Request, Response, NextFunction, Router } from 'express';
import path = require("path");
import fs = require("fs");
//import { auth } from '../cors/verifiedtoken';
//import MediaContoller from '../controllers/media.controller';

//const mediaContoller = new MediaContoller();
const router = Router();

router.get('/', (req, res) => {
    res.status(404);
    res.send('HELLO Media');
});

//router.get('/thumb/:id', (req: Request, res: Response, next: NextFunction) => mediaContoller.getThumb(req, res, next));

router.get('/*', (req: Request, res: Response, next: NextFunction) => getMedia(req, res));

//router.post('/upload', auth, (req: Request, res: Response, next: NextFunction) => mediaContoller.upload(req, res, next));

//router.post('/chooseProfilePhoto', auth, (req: Request, res: Response, next: NextFunction) => mediaContoller.chooseProfilePhoto(req, res, next));

router.all('/*', function (req: Request, res: Response, next: NextFunction) {
    res.status(404);
    res.send('No Media');
});

function getMedia(req: any, res: Response) {
    const base = parseInt(req.query.base) || null;

    const appDir: string = path.resolve(__dirname, '../..');
    const imageURL: string = appDir + '/media' + req.path;
    console.log(imageURL);
    
    //res.send(imageURL);
    try {
        if (!fs.existsSync(imageURL)) {
            res.status(404).send('No Media');
        } else {
            if (base) res.status(200).send(fs.readFileSync(imageURL, { encoding: 'base64' }));
            else res.status(200).sendFile(imageURL);
        }
    } catch (err) {
        res.status(404).send('Error Media' + err);
    }
}

export default router;
